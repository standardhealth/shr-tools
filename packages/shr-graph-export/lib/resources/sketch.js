let nodeList = []; // Global array to contain all nodes in the tree (nodes will be mutated by reference throughout the code)
let pathList = []; // Global array to contain all paths in the tree from the root node to a single terminal node
let jm;

const darkblue = 'rgb(86, 126, 188)';
const lightblue = 'rgba(86, 126, 188)';
const darkgray = 'rgb(120, 120, 120)';
const lightgray = 'rgb(240, 240, 240)';
const white = 'rgb(255, 255, 255)';
const black = 'rgb(0, 0, 0)';

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
    const humanReadableName = node.type === 'primitive' ? node.name : getHumanReadableName(node.name);
    if (node.properties.length === 0 && node.values.length === 0) {
        return {
            id: Math.random().toString(),
            topic: humanReadableName,
            direction: node.direction,
            type: node.type,
            connection: node.connection,
            name: node.name,
            'background-color': selectColors(node.type).backgroundColor,
            'foreground-color': selectColors(node.type).color
        };  
    }
    const properties = node.properties.map(child => nodeToMind(Object.assign({connection: 'property'}, child))).filter(el => el != null);
    const values = node.values.map(child => nodeToMind(Object.assign({connection: 'value'}, child))).filter(el => el != null);
    const children = properties.concat(values);
    return {
        id: Math.random().toString(),
        topic: humanReadableName,
        direction: node.direction,
        children: children,
        type: node.type,
        connection: node.connection, 
        name: node.name,
        'background-color': selectColors(node.type).backgroundColor,
        'foreground-color': selectColors(node.type).color
    };
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

function selectColors(type) {
    switch (type) {
        case 'entry':
        case 'abstract':
            return {backgroundColor: darkblue, color: white};
        case 'element':
        case 'group':
            return {backgroundColor: lightgray, color: lightblue};
        case 'primitive':
        default:
            return {backgroundColor: white, color: black};
    }
}

// Utility functions to get a human readable name for a node.
// This will get the string after the last '.' and insert a space in between:
// - not a capital letter -- a capital letter
// - a capital letter -- a capital letter follow by not a capital letter
// - not a number -- a number
const getHumanReadableName = (name) => {
    return `${name.substr(name.lastIndexOf(".") + 1).replace(/(([^A-Z])([A-Z]))|(([A-Z])([A-Z][^A-Z]))|(([^0-9])([0-9]))/g, humanReadableReplacer).trim()}`;
}
const humanReadableReplacer = (match, p1, p2, p3, p4, p5, p6, p7, p8, p9, offset, string) => {
    if (p1) {
    return [p2, p3].join(' ');
    } else if (p4) {
    return [p5, p6].join(' ');
    } else if (p7) {
    return [p8, p9].join(' ');
    }
}

function setup() {

    const mindTree = treeToMind(tree);
    const jmOptions = {
        container: 'jsmind_container',
        editable: false,
        theme: 'default',
        default_event_handle: {
            enable_mousedown_handle: false,
            enable_click_handle: false,
            enable_dblclick_handle: false
        }
    }
    jm = new jsMind(jmOptions);

    // Overriding default handlers with our own
    jm.view.add_event(this, 'click', clickHandler);

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

function clickHandler(e) {
    const element = e.target || e.srcElement;
    const isExpander = jm.view.is_expander(element);
    const nodeid = jm.view.get_binded_nodeid(element);
    if (nodeid != null) {
        if (isExpander) {
            jm.toggle_node(nodeid);
        } else {
            const node = jm.get_node(nodeid);
            if (node.isroot) {
                const urlName = node.data.name.replace(/\./g, '-');
                const url = `../StructureDefinition-${urlName}.html`;
                window.parent.location.href = url;
            }
        }
    }
}