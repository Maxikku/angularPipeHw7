import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from './users';

@Pipe({
  name: 'usersArray'
})
export class UsersArrayPipe implements PipeTransform {


  transform(value: IUser[], ...args: string[]): any[] {
    const changedUs = [];
    let changedUsers;

    value.forEach(user => {
      // changedUs.push(`${user.name} ${user.username},`);

      changedUsers += `<div>
                            <h2>${user.name}</h2>
                            <p>${user.username}</p>
                        </div>`;
    });

    return changedUsers;
  }

}
