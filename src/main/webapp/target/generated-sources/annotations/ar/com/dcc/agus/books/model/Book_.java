package ar.com.dcc.agus.books.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Book.class)
public abstract class Book_ {

	public static volatile SingularAttribute<Book, Integer> quantity;
	public static volatile SingularAttribute<Book, String> author;
	public static volatile SingularAttribute<Book, Integer> price;
	public static volatile SingularAttribute<Book, Integer> id;
	public static volatile SingularAttribute<Book, String> title;

	public static final String QUANTITY = "quantity";
	public static final String AUTHOR = "author";
	public static final String PRICE = "price";
	public static final String ID = "id";
	public static final String TITLE = "title";

}

