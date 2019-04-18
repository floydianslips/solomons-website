import React, { Component } from 'react';

export default class RandomImage extends Component {

  componentDidMount() {
    console.log("hello")
    this.importAll()
    this.imagesRandom()
  }
  importAll = (r) => {
    console.log("import alli")
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  imagesRandom = () => {
    console.log("random")
    const image = this.importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    var keys = Object.keys(image)
    return image[keys[ keys.length * Math.random() << 0]];
    // return image[Object.keys(image)[0]];
  }

  render () {
    return (
      <img src={this.imagesRandom()} alt='solomon' />
    )
  }


}
