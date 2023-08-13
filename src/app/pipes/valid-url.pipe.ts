import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validUrl',
})
export class ValidUrlPipe implements PipeTransform {
  transform(input: string): string {
    const validChars = /^[A-Za-z0-9]+$/;
    let previousCharIsValid = true;

    const validCharsArray = input.split('').map((char, index) => {
      if (char.match(validChars)) {
        previousCharIsValid = true;
        return char;
      } else {
        if (previousCharIsValid && index > 0 && index < input.length - 1) {
          previousCharIsValid = false;
          return '-';
        } else {
          previousCharIsValid = false;
          return '';
        }
      }
    });

    return validCharsArray.join('');
  }
}
