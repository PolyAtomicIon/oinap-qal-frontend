
const test ={
  getFilter(list:[],category:string) {
    return list.filter(function(item:{categories:Array<string>}):boolean{
      console.log(item.categories.includes(category))
      return item.categories.includes(category)
    })
  }
}
export default test
