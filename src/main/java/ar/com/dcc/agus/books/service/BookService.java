package ar.com.dcc.agus.books.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ar.com.dcc.agus.books.dao.BookDao;
import ar.com.dcc.agus.books.model.Book;


@Service("bookService")
public class BookService {
	
	 @Autowired
	    BookDao bookDao;
	 
	    @Transactional
	    public List<Book> listBooks() {
	        return bookDao.listBooks();
	    }
	 
	    @Transactional
	    public Book getBookById(int id) {
	        return bookDao.getBookById(id);
	    }
	 
	    @Transactional
	    public void addBook(Book book) {
	        bookDao.addBook(book);
	    }
	 
	    @Transactional
	    public void updateBook(Book book) {
	        bookDao.updateBook(book);
	 
	    }
	 
	    @Transactional
	    public void removeBook(Book book) {
	        bookDao.removeBook(book);
	    }

}
