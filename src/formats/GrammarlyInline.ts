import Quill from 'quill'

const Inline = Quill.import('blots/inline')

export default class GrammarlyInline extends Inline {
    public readonly tagName: string = 'G';
    public readonly blotName = 'grammarly-inline'
    public readonly className = 'gr_'
}
