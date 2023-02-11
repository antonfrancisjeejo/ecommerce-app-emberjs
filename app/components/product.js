import Component from '@glimmer/component';

export default class ProductComponent extends Component {
  //this.args represent the props passed in Product component
  productImage = this.args.product.colors[0].image;
}
