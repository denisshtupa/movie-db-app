declare var $: any;

export class HelperFunctions {
  //Scroll to top of the page
  static scrollToTop(): void {
    setTimeout(function () {
      $('html').scrollTop(0);
    }, 150);
  }
}
