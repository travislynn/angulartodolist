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
        { Id: 1, Title: "Pick Up Kids", Description: "The kids are going swimming.  Pick them up at 5", Completed: false, CompletedDate: "", CreateDate: "12/2/2017" },
        { Id: 2, Title: "Mail Bills", Description: "Bills are in the envelop", Completed: false, CompletedDate: "", CreateDate: "12/2/2017" },
        { Id: 3, Title: "Oil Change", Description: "100 miles past due", Completed: false, CompletedDate: "", CreateDate: "12/2/2017" }
      ];

      return items;
    }

    async updateItem(item: ToDoItem) {
      // TODO:
      
    }

    private handleError(error: any): Promise<any> {
      console.error('An error has occured', error);
      return Promise.reject(error.message || error);
  }


}
