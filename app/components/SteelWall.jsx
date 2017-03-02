import React from 'react'

export default class SteelWall extends React.Component {
  static propTypes = {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
  }

  render() {
    const { x, y } = this.props
    return (
      <g role="steelwall" transform={`translate(${x},${y})`}>
        <rect width={8} height={8} fill="#ADADAD" />
        <rect x={2} y={2} width={4} height={4} fill="#FFFFFF" />
        <path d="M6,2 h1,v-1,h1,v7,h-7,v-1,h1,v-1,h4,v-4" fill="#636363" />
      </g>
    )
  }
}
