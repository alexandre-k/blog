import React from 'react'
import * as d3 from 'd3'

export default class D3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }
    createData() {
        const data = [];
        d3.range(5000).forEach(el => {
            data.push({ value: el });
        });
        console.log(data)
        this.setState({ data: data });
    }
    loadFigure() {
        var width = 750, height = 400;
        var canvas = d3.select('#container')
            .append('canvas')
            .attr('width', width)
            .attr('height', height);

        var context = canvas.node().getContext('2d')

        var customBase = document.createElement('custom');
        var custom = d3.select(customBase)

        var groupSpacing = 4;
        var cellSpacing = 2;
        var offsetTop = height / 4;
        var cellSize = Math.floor((width - 11 * groupSpacing) / 100) - cellSpacing;

        function databind (data) {
            colourScale = d3.scaleSequential(d3.interpolateSpectral)
                            .domain(d3.extent(data, d => {return d}))
        }
        var join = custom.selectAll('custom.rect')
                        .data(data);

        var enterSel = join.enter()
                            .append('custom')
    }
    render() {
        return (
            <div>
            <button onClick={this.createData}>Create data</button>
            <button onClick={this.loadFigure}>Load figure</button>
            <div id='container'></div>
            <ul>
                {this.state.data.map(object => {
                    return (
                        <li>object</li>
                    )
                })}
            </ul>
        </div>
        )
    }
}
