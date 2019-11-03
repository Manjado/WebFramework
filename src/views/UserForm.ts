export class UserForm {
  //element is basically a reference to any html element
  constructor(public parent: Element) {}

  template(): string {
    return `<div><h1>User Form</h1><input /></div>`;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
