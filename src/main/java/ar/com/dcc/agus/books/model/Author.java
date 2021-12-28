package ar.com.dcc.agus.books.model;

public class Author {
	
	private String name;	
	
	public Author () {		
	}
	
	public Author(String name) {
		this.name = name;
	}
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public boolean equals(Object o) {
		if(o == null) return false;
		if(o.getClass() != this.getClass()) return false;
		Author a = (Author) o;
		if(this.getName().equals(a.getName())) return true;
		return false;		
	}
}
