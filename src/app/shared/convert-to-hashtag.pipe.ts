import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:"convertToHashtag"
})


export class ConvertToHashtagPipe implements PipeTransform{

    transform(value:string, character: string): string{
        return value.replace(character,"#");
    }
    
} 