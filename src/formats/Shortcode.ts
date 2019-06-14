import Quill from 'quill';

const InlineEmbed = Quill.import('blots/embed');

export default class Shortcode extends InlineEmbed {

  public readonly blotName: string = 'shortcode';
  public readonly tagName: string = 'span';

  static create(value) {
    const node = super.create(value);
    node.setAttribute('class', 'ql-shortcode');
    node.innerHTML = value;

    return node;
  }
}
