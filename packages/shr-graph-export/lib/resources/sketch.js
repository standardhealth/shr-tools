let nodeWidth;
let nodeHeight;
let ctx;

let darkblue, lightblue, lightgray, darkgray, white;

let nodeList = []; // Global array to contain all nodes in the tree (nodes will be mutated by reference throughout the code)
let pathList = []; // Global array to contain all paths in the tree from the root node to a single terminal node
let layerInfo = {}; // Global object to hold the count of nodes in each layer on each side

// Recursive function to process the nodes in the tree into the global nodeList, pathList
function fillNodeAndPathList(node, layer=0, path=[]) {
    node.depth = layer;

    nodeList.push(node);
    path.push(node);

    // Iterate over all children (properties and values)
    const children = node.properties.concat(node.values);
    if (children.length > 0) { // Non-terminal node
        for (const child of children) {
            fillNodeAndPathList(child, layer+1, [...path]); // Go to the next child, incrementing layer and passing path
        }
    } else { // Terminal node
        pathList.push(path);
    }
}

// Recursive function to process the nodes in the tree into the global layerInfo
function fillLayerInfo(node, layer=0) {
    const direction = node.direction;
    if (layerInfo[`${direction}${layer}`] == null) layerInfo[`${direction}${layer}`] = 0;
    layerInfo[`${direction}${layer}`] += 1;

    node.count = layerInfo[`${direction}${layer}`];

    // Iterate over all children (properties and values)
    const children = node.properties.concat(node.values);
    if (children.length > 0) { // Non-terminal node
        for (const child of children) {
            fillLayerInfo(child, layer+1); // Go to the next child, incrementing layer
        }
    }
}

function treeToD3(tree) {
    const d3Trees = tree.map(rootNode => {
        rootNode = nodeToD3(rootNode);
        const d3Root = d3.tree(rootNode);
        return d3Root;
    });
}

function nodeToD3Data(node) {
    if (node.properties.length === 0 && node.values.length === 0) {
        return {name: node.name}
    }
    const properties = node.properties.map(child => nodeToD3Data(child));
    const values = node.values.map(child => nodeToD3Data(child));
    const children = properties.concat(values);
    return {name: node.name, children: children};
}

// The p5.js function that is run automatically at startup of the application
function setup() {
    // Define color variables to use in drawing
    darkblue = color(86, 126, 188);
    lightblue = color(86, 126, 188, 180);
    darkgray = color(120);
    lightgray = color(240, 240, 240);
    white = color(255);
    
    // Set the canvas
    createCanvas(1000, 1000);
    ctx = canvas.getContext('2d');

    let index = 0;
    const options = Object.assign({}, tree.map(e => e.name));
    const sel = createSelect();
    sel.position(10, 10);

    let humanReadableOptionsMap = {};
    for (const key of Object.values(options)) {
        sel.option(getHumanReadableName(key));
        humanReadableOptionsMap[getHumanReadableName(key)] = key;
    }

    sel.changed(() => {
        index = Object.keys(options).find(key => {
            return options[key] === humanReadableOptionsMap[sel.value()];
        });
        render(index, d3Trees);
    });

    const d3Data = tree.map(rootNode => {
        rootNode = nodeToD3Data(rootNode);
        return rootNode;
      });

    let d3Tree = d3.tree()
        .size([800, 800]);

    const d3Trees = d3Data.map(d3Root => d3Tree(d3.hierarchy(d3Root)));
    console.log(d3Trees);

    render(index, d3Trees);
}

function render(index, d3Trees) {
    // Clear the global data variables, and clear the node list.
    nodeList = [];
    pathList = [];
    layerInfo = {};
    clear();

    // Process the tree of the given root node and store the nodes and paths of the tree
    let root = tree[index];
    let d3Tree = d3Trees[index];
    fillNodeAndPathList(root);

    // There's a lot of math that needs to be done in order to split the paths
    // evenly across the left and right of the root node, as well as to automate
    // the position on the screen of each node. That's what follows below.

    // Sort the list of paths by path length
    pathList.sort((a, b) => b.length - a.length);

    // Find the middle index of the path list and split the path list into
    // right (with the longest paths) and left (with the shortest paths)
    const pathMidIndex = Math.ceil(pathList.length / 2);
    //const rightPathList = pathList.slice(0, pathMidIndex);
    const rightPathList = pathList;
    //const leftPathList = pathList.slice(pathMidIndex, pathList.length);
    const leftPathList = [];

    // Assign the direction of the nodes in each path to the right as 'right'
    rightPathList.forEach(path => path.forEach(node => node.direction = 'right'));

    // Assigning the direction of the nodes in the left paths is more complicated.
    // We have to check that the first child of the root node (path[1]) hasn't already
    // been processed. It's possible that it's already been processed as to the 'right'.
    // If that's the case, we want to ensure that all successors along this path also
    // follow the 'right' direction. Otherwise, they go 'left'.
    leftPathList.forEach(path => {
        const pathBaseDirection = path[1].direction || 'left';
        path.slice(1).forEach(node => {
            if (node.direction == null) node.direction = pathBaseDirection;
        });
    });

    // Calculate the number of columns to the right and left of the center column, then find the
    // correct increment of horizontal distance to use in order to scale each node's x-position properly.
    const numRightColumns = rightPathList.length > 0 ? rightPathList[0].length - 1 : 0;
    const numLeftColumns = leftPathList.length > 0 ? leftPathList[0].length - 1 : 0;
    const numColumns = numRightColumns + numLeftColumns + 1;
    const numCenterColumn = numLeftColumns + 1;
    const columnIncrement = width / (numColumns + 1);

    // Process the tree of the given root node and store the layer information
    fillLayerInfo(root);

    // Assign the x-position and y-position of each node by performing calculations
    // based on its direction, its depth, and the number of other nodes in its layer
    for (const path of pathList) {
        const dummyRoot = {children: [d3Tree]}
        let d3CurrentNode = dummyRoot;
        for (const node of path) {
            d3CurrentNode = d3CurrentNode.children.filter(n => n.data.name === node.name)[0];
            if (node.posX && node.posY) continue;

            node.posX = 100 + (node.direction === 'right' ? 1 : -1) * d3CurrentNode.y;
            node.posY = d3CurrentNode.x;
        }
    }

    // Dynamically assign the width, height, and font size of nodes based on the window size.
    nodeWidth = width/20;
    nodeHeight = height/20;
    const fontSize = width/120;

    // Assign the default parameters to use when drawing in p5.js
    rectMode(CENTER);
    textSize(fontSize);
    textAlign(CENTER, CENTER);
    stroke(lightblue);

    // Now that we've assigned all the nodes' characteristics, draw everything in the graph.
    for (const node of nodeList) {
        drawNode(node);

        for (const child of node.properties) {
            const type = (child.type === 'entry') ? 'reference' : 'property';
            drawLink(node, child, type);
        }

        for (const child of node.values) {
            drawLink(node, child, 'value');
        }
    }
}
