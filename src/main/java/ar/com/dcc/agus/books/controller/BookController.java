package ar.com.dcc.agus.books.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ar.com.dcc.agus.books.model.Book;
import ar.com.dcc.agus.books.service.BookService;

@Controller
public class BookController {
	
	@Autowired
	BookService bookService;	
	
	@RequestMapping(value = "/")
	public String home()
	{
		return "redirect:/index";
	}
	
	@RequestMapping(value = "/index")
	public String index()
	{
		return "index";
	}
	
	@RequestMapping (value = "book/save", method = RequestMethod.POST)
	@ResponseBody
	public void saveBook(@RequestBody Book book)
	{
		bookService.addBook(book);
	}
	
	@ResponseBody
	@RequestMapping (value = "book/loadBooks", produces = "application/json", method = RequestMethod.GET)
	public Map<String, List<Book>> loadAllBooks()
	{
		Map<String, List<Book>> books = new HashMap<String, List<Book>>();
		books.put("books", bookService.listBooks());
		return books;
	}
	
	@RequestMapping (value = "book/delete", method = RequestMethod.DELETE)
	@ResponseBody
	public void deleteBooks(@RequestBody Book book)
	{
		bookService.removeBook(book);
	}
	
	@RequestMapping (value = "book/updateBook",  method = RequestMethod.POST)
	@ResponseBody
	public void updateBooks(@RequestBody Book book)
	{
		bookService.updateBook(book);		
	}	
	
}
