using System.Globalization;
using System.Collections.Generic;
using System.Linq;
using System;

namespace Challenges {

	public class Challenge {

		public static void Main(string[] args) {

				Console.WriteLine(AlphabetPost("The sunset sets at twelve o' clock."));
				//Console.WriteLine(Repeats(new List<int> {4, 5, 7, 5, 4, 8}));
				// ArrayDiff(new int[] {1, 2,2,2,3}, new int[] {2});
				//ArrayDiff(new int[]{1,2,2}, new int[] {2});
				//Printing most reocurring weekdays for gregorian calendar year
				// foreach (string day in MostFrequentDays(1968)){
				// 	Console.WriteLine(day);
				// }


		}


		public static string AlphabetPost(string text){
			char[] alpha = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',};
			text = text.ToLower();
			text = text.Replace(" ", String.Empty);
			Console.WriteLine(text);
			string result = "";
			foreach(char a in text){
				int ix = Array.IndexOf(alpha, a);
				if(ix > -1){
					result += (ix+ 1).ToString();
				}
				
			}

			return result;
		}
		//Takes a list where all ints are repeated twice, except two ints, and returns the sum of the ints of a list where those ints only occur once.
		public static int Repeats(List<int> source){
			int result = 0;


			foreach(int iq in source.GroupBy(grp => grp).Where(item => item.Count() == 1).Select(val => val.Key)){
				result += iq;
			}

			return result;
		}

		//difference function, which subtracts one list from another and returns the result.
		public static int[] ArrayDiff(int[] a, int[] b){

			var result = a;

			foreach(int x in b){
				result = result.Where(val => val != x).ToArray();
			}

			foreach(int item in result){
				Console.WriteLine(item);
			}

			return result;

			

		}

		/*Finds most reoccurring weekdays throughout the year*/
		public static string[] MostFrequentDays(int year){
			var DaysCNT = new Dictionary<string, int>(){
				{"Monday", 0},
				{"Tuesday", 0},
				{"Wednesday", 0},
				{"Thursday", 0},
				{"Friday", 0},
				{"Saturday", 0},
				{"Sunday", 0},
			};
			JulianCalendar CAL = new JulianCalendar();

			foreach(DateTime day in EachDay(new DateTime(year, 1, 1, new GregorianCalendar()), new DateTime(year + 1, 1, 1, new GregorianCalendar()).AddDays(-1) )){
				DaysCNT[CAL.GetDayOfWeek(day).ToString()]++;
			}
			foreach (var day in DaysCNT)
			{
				Console.WriteLine(day);
			}

			Console.WriteLine(DaysCNT.Values.Max());
			return DaysCNT.Where(e => e.Value == 53).Select(val => val.Key).ToArray();

		}

		public static IEnumerable<DateTime> EachDay(DateTime from, DateTime thru){
			for(var day = from.Date; day.Date <= thru.Date; day = day.AddDays(1)) yield return day;
		}

	}
}