import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myday'
})
export class DAYPipe implements PipeTransform {

    transform() {
        return 'Kg';
    }
}