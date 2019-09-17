let nodeList = []; // Global array to contain all nodes in the tree (nodes will be mutated by reference throughout the code)
let pathList = []; // Global array to contain all paths in the tree from the root node to a single terminal node

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

function nodeToMind(node) {
    if (node.properties.length === 0 && node.values.length === 0) {
        return {id: Math.random().toString(), topic: node.name, direction: node.direction, type: node.type, connection: node.connection}
    }
    const properties = node.properties.map(child => nodeToMind(Object.assign({connection: 'property'}, child))).filter(el => el != null);
    const values = node.values.map(child => nodeToMind(Object.assign({connection: 'value'}, child))).filter(el => el != null);
    const children = properties.concat(values);
    return {id: Math.random().toString(), topic: node.name, direction: node.direction, children: children, type: node.type, connection: node.connection};
}

function treeToMind(tree) {
    const mindTree = tree.map(rootNode => {

        // Process the tree of the given root node and store the nodes and paths of the tree
        fillNodeAndPathList(rootNode);

        // Evenly split the nodes adjacent to the root
        const adjacentNodes = rootNode.properties.concat(rootNode.values);
        const nodeMidIndex = Math.ceil(adjacentNodes.length / 2);
        const rightNodes = adjacentNodes.slice(0, nodeMidIndex);
        const leftNodes = adjacentNodes.slice(nodeMidIndex);

        rootNode.direction = 'root';

        rightNodes.map(n => n.direction = 'right');
        leftNodes.map(n => n.direction = 'left');

        // Label all nodes that are not adjacent to the root as right or left
        pathList.forEach(path => {
            path.slice(1).forEach(node => {
                if (node.direction == null) node.direction = path[1].direction;
            });
        });

        const mindData = nodeToMind(rootNode);
        const mind = {
            meta: {
                name: '',
                author: '',
                version: ''
            },
            format: 'node_tree',
            data: mindData
        }
        return mind;
    });
    return mindTree;
}

function setup() {

    const mindTree = treeToMind(tree);
    const jmOptions = {
        container: 'jsmind_container',
        editable: false,
        theme: 'orange' 
    }
    const jm = new jsMind(jmOptions);

    let index = 0;
    const options = Object.assign({}, tree.map(e => e.name));
    const sel = createSelect();
    sel.style('z-index', '999');
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
        render(index, jm, mindTree);
    });

    render(index, jm, mindTree);
}

function render(index, jm, mindTree) {
    clear();
    jm.show(mindTree[index]);
}