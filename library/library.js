let library=[];
function addBook(title,authorName)
{
let book={
    id: library.length+1,
    name:title,
    author:authorName,
    available:true,
    issue: function()
    {
        this.available=false;
    },
    returnbook: function()
    {
        this.available=true;
    }

}
library.push(book);
console.log("succesfully book add in library");
}
function issueBook(id)
{
 for(let book of library)
 {
    if(book.id==id)
    {
        if(book.available)
        {
            book.issue();
            console.log("book issued",id,":",book.name);
            
        }else{ console.log("already issue");}
        return;
    }
 }
 console.log("book not found")
}
function returnBook(id)
{
    for(let book of library)
    {
        if(book.id===id)
        {
            book.returnbook();
            console.log("book return",book.name)
            return
        }
    }
}
function showBook()
{
    for(let book of library)
    {
        console.log(book.id,book.name,book.author,book.available);
    }
}
function storeLibrary()
{
    localStorage.setItem("library",JSON.stringify(library));
}
function reloadLibrary()
{
    let data=localStorage.getItem("library");
    if(data)
    {
        library=JSON.parse(data);
        
    }
}
addBook("using c++","asha rani");
showBook();
issueBook(2);
showBook();
issueBook(1);
returnBook(1);
showBook();
