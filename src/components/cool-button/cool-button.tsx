import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cool-button',
  styleUrl: 'cool-button.css',
  shadow: true,
})
export class CoolButton {
  /**
   * Text label
   */
  @Prop() text: string = 'Click';

  /**
   * Color of button
   */
  @Prop() color: 'primary' | 'secondary' | 'dark' = 'primary';

  render() {
    return (
      <Host>
        <button class={this.color}>{this.text}</button>
      </Host>
    );
  }
}
