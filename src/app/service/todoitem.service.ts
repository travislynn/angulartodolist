import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/toPromise";
import { ToDoItem } from '../model/ToDoItem';

@Injectable()
export class TodoitemService {
  private serviceUrl = `/api/ToDoApi`;

  constructor(public http: Http) { }

  async getToDoItems(): Promise<ToDoItem[]> {

		// return await this.http.get(`${this.serviceUrl}`)
		// 	.toPromise()
    //   .then(response => {
		// 	  let tasks = response.json() as ToDoItem[];
		// 		return tasks;
		// 	})
    // 	.catch(this.handleError);
    
      return Promise.resolve(this.getSampleData());
    }

    private getSampleData() : ToDoItem[] {
      //var obj: { property: string; } = { property: "foo" };

      //let item1: ToDoItem = { Title: "Stuff", Description: "Stuff", Completed: false, CompletedDate: "", CreateDate: "12/2/2017" };

      let items: ToDoItem[] = [
        { Title: "Stuff", Description: "Stuff", Completed: false, CompletedDate: "", CreateDate: "12/2/2017" },
        { Title: "Stuff", Description: "Stuff", Completed: false, CompletedDate: "", CreateDate: "12/2/2017" },
        { Title: "Stuff", Description: "Stuff", Completed: false, CompletedDate: "", CreateDate: "12/2/2017" }
      ];

      return items;
    }

    private handleError(error: any): Promise<any> {
      console.error('An error has occured', error);
      return Promise.reject(error.message || error);
  }


}
