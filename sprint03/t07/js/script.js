class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.length = 0
    }

    add(value){
        let node = new Node(value); 

        if (this.length === 0) 
            this.head = node; 
        else {
            let new_node = this.head;

            while(new_node.next){
                new_node = new_node.next
            }
            new_node.next = new Node(value);
        }

        this.length++;
        
    }

    remove(value){
            if(this.head === null) return
            if(this.head.data === value) this.head = this.head.next
            let toDelete = this.head
            if(toDelete.next.data === value) {
                toDelete.next = toDelete.next.next
                return
            }  
            for(;toDelete.next.next;){
                if(toDelete.next.data === value){
                    toDelete.next = toDelete.next.next
                }
                toDelete = toDelete.next
            }
            console.log(this.head)

       

    }

    [Symbol.iterator](){

    }
    contains(value){
        let search = this.head
        if(search.data === value) return true
        while(search.next){
            search = search.next
            if(search.data === value) return true
        }
        return false
    }

    clear(){
        if(!this.head) return this
        let rem = this.head
        this.head = null
        while(this.next){
            this.remove(rem.data);
            rem = rem.next
        }
        this.length = 0
    }

    count(){
        return this.length
    }

    log(){
        let output = "\""

        let thisNode = this.head
        output += (thisNode.data).toString()
        output += ", "
        for(;thisNode.next;) {
            thisNode = thisNode.next
            output += (thisNode.data).toString()
            output += ", "
            

        }
        output = output.slice(0, -2)
        output += "\""
        console.log(output)
    }
}

function createLinkedList(arr){
    let llist = new LinkedList(arr)
    for(item of arr){
        llist.add(item)
    }
    return llist
}
/* 
const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log();
// "1, 2, 3, 4, 5"
ll.add(10);
ll.log();
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));
// "true"
let sum = 0;
for (const n of ll) {
sum += n;
}
console.log(sum);
// "25"
ll.clear();
ll.log();
// ""  */