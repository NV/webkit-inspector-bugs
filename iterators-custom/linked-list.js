"use strict";


class LinkedListNode
{
	constructor(value)
	{
		this.value = value;
		this.prev = null;
		this.next = null;
	}

	addAfter(node)
	{
		var next = this.next;
		this.next = node;
		node.next = next;
		next.prev = node;
		node.prev = this;
	}
}



class LinkedList
{
	constructor(...items)
	{
		this.head = new LinkedListNode;
		this.head.next = this.head.prev = this.head;
		this.length = 0;
		if (items) {
			this.push(...items);
		}
	}

	get last()
	{
		return this.head.prev || this.head;
	}

	push(...items)
	{
		var last = this.last;
		for (let item of items) {
			var newNode = new LinkedListNode(item);
			last.addAfter(newNode);
			last = newNode;
		}

		this.length += items.length;
	}

	toArray()
	{
		var node = this.head;
		var i = this.length;
		var result = new Array(i);
		while (i--) {
			node = node.prev;
			result[i] = node.value;
		}
		return result;
	}

	[Symbol.iterator]()
	{
		return new ListIterator(this.head);
	}
}



class ListIterator{
	constructor(head)
	{
		this.head = head;
		this.at = head.next;
		this.index = 0;
	}

	next()
	{
		if (this.at === this.head) {
			return {
				done: true
			};
		} else {
			var at = this.at;
			this.at = this.at.next;
			this.index++;
			return {
				done: false,
				value: at.value
			};
		}
	}
}
