import Component from '@glimmer/component';

interface JournalEntryHeaderArgs {
  title: string;
  subtitle: string;
  date: string;
}

export default class JournalEntryHeader extends Component<JournalEntryHeaderArgs> {}
