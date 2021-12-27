package ar.com.dcc.agus.books.dao;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import ar.com.dcc.agus.books.model.Book;
import ar.com.dcc.agus.books.model.Book_;

@Repository
public class BookDao {
	 
	@Autowired
	@Qualifier("sessionFactory")
	private SessionFactory sessionFactory;
	 
	public void setSessionFactory(SessionFactory sf) {
		this.sessionFactory = sf;
	}
	
	public Book addBook(Book newBook) {
    	Session session = this.sessionFactory.getCurrentSession();
		session.save(newBook);
		return newBook;
	}
	
	 public void updateBook(Book bookToUpdate) {
	    Session session = this.sessionFactory.getCurrentSession();
	    session.update(bookToUpdate);	    	       
	 }
	 
	 public List<Book> listBooks(){
		Session session = this.sessionFactory.getCurrentSession();
 		CriteriaBuilder cb = session.getCriteriaBuilder();
 		CriteriaQuery<Book> cr = cb.createQuery(Book.class);
 		Root<Book> root = cr.from(Book.class);
 		cr.select(root);

 		TypedQuery<Book> query = session.createQuery(cr);
 		List<Book> results = query.getResultList();
 		return results;
	 }
	
	public Book getBookById(int bookId) {
		Session session = this.sessionFactory.getCurrentSession();
 		CriteriaBuilder cb = session.getCriteriaBuilder();
 		CriteriaQuery<Book> cr = cb.createQuery(Book.class);
 		Root<Book> root = cr.from(Book.class);  
 		cr.select(root).where(cb.equal(root.get(Book_.id), bookId));

 		TypedQuery<Book> query = session.createQuery(cr);
 		Book result = query.getSingleResult();
 		return result;
	};
	
	public void removeBook(Book book) {
        Session session = this.sessionFactory.getCurrentSession();
    	Book userToDelete = session.find(Book.class, book.getId());
    	session.remove(userToDelete);
    	session.flush();
    	session.clear();    
	};
}
