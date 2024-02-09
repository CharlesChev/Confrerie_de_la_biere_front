import { Pipe, PipeTransform } from '@angular/core';
import { Biere } from '../interfaces/biere.interface';

@Pipe({
  name: 'alphabetFilter',
  pure: true
})
export class AlphabetFilterPipe implements PipeTransform {

  transform(bieres: Biere[], letter: string): Biere[] {
    if (letter === "#") {
      let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      let filteredBiere: Biere[] = [];
      for (let i = 0; i < bieres.length; i++) {
        if (!alphabet.includes(bieres[i].nom[0].toUpperCase())) {
          filteredBiere.push(bieres[i]);
        }
      }
      return filteredBiere;
    } else {
      return bieres.filter(biere => biere.nom.toUpperCase().startsWith(letter));
    }
  }
}
