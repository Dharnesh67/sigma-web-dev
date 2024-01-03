// Updated tree data with real values and 4 initial children
const treeData = {
    name: 'Root',
    children: [
      {
        name: 'John',
        children: [
          { name: 'Alice' },
          { name: 'Bob' },
          { name: 'Charlie' },
          { name: 'David' }
        ]
      },
      {
        name: 'Jane',
        children: [
          { name: 'Eva' },
          { name: 'Frank' },
          { name: 'Grace' },
          { name: 'Henry' }
        ]
      }
    ]
  };
  
  // Set up SVG container
  const svg = d3.select('body').append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(500,110)'); // Add margin for better visibility
  
  // Create a tree layout
  const treeLayout = d3.tree().size([500, 300]);
  
  // Create a hierarchical data structure
  const root = d3.hierarchy(treeData);
  
  // Generate the tree structure
  treeLayout(root);
  
  // Add links
  svg.selectAll('path.link')
    .data(root.links())
    .enter().append('path')
    .attr('class', 'link')
    .attr('d', d3.linkHorizontal()
      .x(d => d.y)
      .y(d => d.x));
  
  // Add nodes
  const nodes = svg.selectAll('g.node')
    .data(root.descendants())
    .enter().append('g')
    .attr('class', 'node')
    .attr('transform', d => `translate(${d.y},${d.x})`);
  
  // Add circles to represent nodes
  nodes.append('circle')
    .attr('r', 10);
  
  // Add labels to nodes
  nodes.append('text')
    .attr('dy', 3)
    .attr('x', d => d.children ? -13 : 13)
    .style('text-anchor', d => d.children ? 'end' : 'start')
    .text(d => d.data.name);
  