import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming-language',
  templateUrl: './programming-language.component.html',
  styleUrls: ['./programming-language.component.css']
})
export class ProgrammingLanguageComponent implements OnInit {

  languages = [
    {id: 1, name: "Assembly", res: "Kathleen Booth"},
    {id: 2, name: "ALGOL", res: "Friedrich L. Bauer"},
    {id: 3, name: "B", res: " Ken Thompson with Dennis Ritchie."},
    {id: 4, name: "BASIC", res: "John G. Kemeny and Thomas E. Kurtz"},
    {id: 5, name: "C", res: "Denis Ritchie"},
    {id: 6, name: "C++", res: "Bjarne Stroustrup"},
    {id: 7, name: "C# ", res: " Anders Hejlsberg"},
    {id: 8, name: "D", res: "Walter Bright"},
    {id: 9, name: " E", res: "Mark S. Miller, Dan Bornstein"},
    {id: 10, name: " Erlang", res: "Joe Armstrong"},
    {id: 11, name: "F", res: "	The Fortran Company"},
    {id: 12, name: "FORTRAN", res: "John Backus"},
    {id: 13, name: " F# ", res: "Don Syme"},
    {id: 14, name: "G", res: "	Massachusetts Institute of Technology"},
    {id: 15, name: "GO", res: "Ken Thompson,Rob Pike"},
    {id: 16, name: "Haskel", res: "Philip Wadler"},
    {id: 17, name: "Intercal", res: "Don Woods"},
    {id: 18, name: "J", res: "Kenneth E. Iverson, Roger Hui"},
    {id: 19, name: "JAVA", res: "James Gosling"},
    {id: 20, name: "Javascipt", res: "Brendan Eich"},
    {id: 21, name: "K", res: "	Arthur Whitney"},
    {id: 22, name: "LISP", res: "John McCarthy"},
    {id: 23, name: " M (MUMPS)", res: "	Neil Pappalardo"},
    {id: 24, name: " MATLAB", res: "Cleve Moler"},
    {id: 25, name: " NASM", res: "	H. Peter Anvin, "},
    {id: 26, name: "Objective-C", res: "Brad Cox"},
    {id: 27, name: "OCaml", res: "Xavier Leroy"},
    {id: 28, name: "Oberon", res: "	Niklaus Wirth"},
    {id: 29, name: "P", res: "	Vivek Gupta"},
    {id: 30, name: "Prolog", res: "Alain Colmerauer"},
    {id: 31, name: "Perl ", res: "Larry Wall"},
    {id: 32, name: "PHP", res: "Rasmus Lerdorf"},
    {id: 33, name: "Python", res: "Guido van Rossum"},
    {id: 34, name: "Q", res: "Albert Gräf"},
    {id: 35, name: "R", res: "	Ross Ihaka and Robert Gentleman"},
    {id: 36, name: "S", res: "Rick Becker, Allan Wilks, John Chambers"},
    {id: 37, name: "Simula", res: "Ole-Johan Dahl"},
    {id: 38, name: "Smalltalk", res: "Alan Kay and Dan Ingalls"},
    {id: 39, name: "Swift", res: "Chris Lattner"},
    {id: 40, name: "T", res: "	Jonathan A. Rees and Norman I. Adams"},
    {id: 41, name: "TCL", res: "John Ousterhout"},
    {id: 42, name: "Ubercode", res: "Ubercode Software"},
    {id: 43, name: "Visual Basic", res: "	Microsoft"},
    {id: 44, name: "Wolfram", res: "Stephen Wolfram"},
    {id: 45, name: "X++", res: "	Microsoft"},
    {id: 46, name: "Yacc ", res: "Stephen C. Johnson"},
    {id: 47, name: "Yorick ", res: "David H. Munro"},
    {id: 48, name: "Z++", res: "David H. Munro "},
    {id: 49, name: "Zeno", res: "Stephen R. Schmitt"},
    {id: 50, name: "ZPL", res: "Chamberlain et al. at University of Washington"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
