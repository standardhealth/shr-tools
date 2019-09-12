// Utility function to draw a node
const drawNode = (node) => {
    // Reset any draw settings in previous draw calls
    strokeWeight(0);
    ctx.setLineDash([]);

    // Perform a different draw operation based on the type of the node 
    const name = (node.type === 'primitive') ? node.name : getHumanReadableName(node.name);
    switch (node.type) {
        case 'element':
            drawElementNode(node.posX, node.posY, name);
            break;
        case 'entry':
            drawEntryNode(node.posX, node.posY, name);
            break;
        case 'group':
            drawGroupNode(node.posX, node.posY, name);
            break;
        case 'abstract':
            drawAbstractNode(node.posX, node.posY, name);
            break;
        case 'primitive':
            drawPrimitiveNode(node.posX, node.posY, name);
            break;
        default:
            break;
    }
}

// Utility function to draw a node
const drawLink = (node1, node2, type) => {
    // Reset any draw settings in previous draw calls
    noFill();
    strokeWeight(2);

    // Determine which direction any position modification needs to be set to
    const posModifier = (node2.direction === 'left') ? -nodeWidth / 2 : nodeWidth / 2;

    // Perform a different draw operation based on the type of the link
    switch (type) {
        case 'property':
            drawPropertyLink(node1.posX, node1.posY, node2.posX, node2.posY, posModifier);
            break;
        case 'reference':
            drawReferenceLink(node1.posX, node1.posY, node2.posX, node2.posY, posModifier);
            break;
        case 'value':
            drawValueLink(node1.posX, node1.posY, node2.posX, node2.posY, posModifier);
            break;
        default:
            break;
    }
}

// Individual draw functions for types of nodes.
// These can all be modified according to style preferences.
const drawElementNode = (posX, posY, name) => {
    fill(lightgray);
    strokeWeight(2);
    rect(posX, posY, nodeWidth, nodeHeight, nodeWidth/10);

    fill(darkblue);
    strokeWeight(0);
    text(name, posX, posY, nodeWidth, nodeHeight);
}
const drawEntryNode = (posX, posY, name) => {
    fill(darkblue);
    rect(posX, posY, nodeWidth, nodeHeight, nodeWidth/10);

    fill(white);
    text(name, posX, posY, nodeWidth, nodeHeight);
}
const drawGroupNode = (posX, posY, name) => {
    fill(lightgray);
    strokeWeight(2);
    rect(posX, posY, nodeWidth, nodeHeight, nodeWidth/10);

    fill(darkblue);
    strokeWeight(0);
    text(name, posX, posY, nodeWidth, nodeHeight);
}
const drawAbstractNode = (posX, posY, name) => {
    fill(darkblue);
    rect(posX, posY, nodeWidth, nodeHeight, nodeWidth/10);

    fill(white);
    text(name, posX, posY, nodeWidth, nodeHeight);
}
const drawPrimitiveNode = (posX, posY, name) => {
    fill(darkgray);
    text(name, posX, posY, nodeWidth, nodeHeight);
}

// Individual draw functions for types of links.
// These can all be modified according to style preferences.
const drawPropertyLink = (pos1X, pos1Y, pos2X, pos2Y, posModifier) => {
    ctx.setLineDash([]);
    const anchor1X = pos1X + posModifier;
    const anchor2X = pos2X - posModifier;
    const controlX = (anchor1X + anchor2X) / 2;
    bezier(anchor1X, pos1Y, controlX, pos1Y, controlX, pos2Y, anchor2X, pos2Y);
}
const drawReferenceLink = (pos1X, pos1Y, pos2X, pos2Y, posModifier) => {
    ctx.setLineDash([10, 10]);
    const anchor1X = pos1X + posModifier;
    const anchor2X = pos2X - posModifier;
    const controlX = (anchor1X + anchor2X) / 2;
    bezier(anchor1X, pos1Y, controlX, pos1Y, controlX, pos2Y, anchor2X, pos2Y);
}
const drawValueLink = (pos1X, pos1Y, pos2X, pos2Y, posModifier) => {
    ctx.setLineDash([2, 5, 10, 5]);
    const anchor1X = pos1X + posModifier;
    const anchor2X = pos2X - posModifier;
    const controlX = (anchor1X + anchor2X) / 2;
    bezier(anchor1X, pos1Y, controlX, pos1Y, controlX, pos2Y, anchor2X, pos2Y);
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