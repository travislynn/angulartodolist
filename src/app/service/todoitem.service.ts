import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/toPromise";
import { ToDoItem } from '../model/ToDoItem';

@Injectable()
export class TodoitemService {
  private serviceUrl = `/api/ToDoApi`;
  private items: ToDoItem[];

  constructor(public http: Http) { }

  async getToDoItems(): Promise<ToDoItem[]> {

    if (!this.items) {
      this.items = this.getSampleData();
    }

    return Promise.resolve(this.items);
		// return await this.http.get(`${this.serviceUrl}`)
		// 	.toPromise()
    //   .then(response => {
		// 	  let tasks = response.json() as ToDoItem[];
		// 		return tasks;
		// 	})
    // 	.catch(this.handleError);
    
      
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
      // TODO:  update item with the source service, if we want to update them with the api immediately.
      // if we do batched updates, this function might not do anything
      
      if (item.Id === -1) {
        let maxId = this.items.reduce( (a: ToDoItem, b: ToDoItem): ToDoItem => (a.Id) > (b.Id) ? a : b ).Id;
        let newId = maxId + 1;
        item.Id = newId;
      }
    }

    getNewItem(): ToDoItem {
      let item: ToDoItem = { Id: -1, Title: "", Description: "", Completed: false, CompletedDate: "", CreateDate: "" };
      return item;
    }

    private handleError(error: any): Promise<any> {
      console.error('An error has occured', error);
      return Promise.reject(error.message || error);
  }


}
