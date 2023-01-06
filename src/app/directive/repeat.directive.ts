import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repeat]',
})
export class RepeatDirective {
  @Input() set repeat(vezes: number) {
    for (let i = 0; i < vezes; i++) {
      this.containerRef.createEmbeddedView(this.templateRef, {
        posicao: i + 1,
      });
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) {}
}
