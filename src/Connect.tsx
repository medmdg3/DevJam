
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  collection, getDoc, getDocs,doc, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBn1MbW8C8cz-cZiBjVo08C3IbdnLTHTOI",
  authDomain: "devjam-9986e.firebaseapp.com",
  projectId: "devjam-9986e",
  storageBucket: "devjam-9986e.appspot.com",
  messagingSenderId: "713572987510",
  appId: "1:713572987510:web:058ed6593c2f0aeb9a2557",
  measurementId: "G-4KM9EFEWLT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db=getFirestore(app);
export const Get_Data = async (File) => {
		
	try {
		
	  const usersCollectionRef = collection(db, File);
	  const usersSnapshot = await getDocs(usersCollectionRef);
	  return usersSnapshot;
	  
	} catch (error) {
	  console.error('Error fetching data: ', error);
	}
	return [];
  };
  export const Get_Doc = async (collection,doc_Id) => {
		console.log(collection+doc_Id);
	try {
		const docRef  = doc(db, collection,doc_Id);
	  const usersSnapshot = await getDoc(docRef );
	  return (usersSnapshot.data().Data);
	  
	} catch (error) {
	  console.log('Error fetching data: ', error);
	}
	return "An error happened!";
  };
export async function Terrains  () {
	let usersSnapshot=await Get_Data('Terrain');
	let userData:[string,number,string,string,string,string][] =[]
	  usersSnapshot.forEach((doc) => {
		userData.push(["",0,"","","",""]);
		let H=doc.data();
		userData[userData.length-1][0]=String(H.Name);
		userData[userData.length-1][1]=Number(H.Capacity);
		userData[userData.length-1][2]=String(H.Location);
		userData[userData.length-1][3]=String(H.Image);
		userData[userData.length-1][4]=String(H.Know_More);
		userData[userData.length-1][5]=String(H.Maps);
	  });
	  return userData;
};
export async function Get_Description  () {
	let usersSnapshot=await Get_Data('Pages');
	let userData:[string,string,string,string,string,string][] =[]
	  usersSnapshot.forEach((doc) => {
		userData.push(["","","","","",""]);
		let H=doc.data();
		userData[userData.length-1][0]=String(H.Home);
		userData[userData.length-1][1]=String(H.Actuality);
		userData[userData.length-1][2]=String(H.ExploreHot);
		userData[userData.length-1][3]=String(H.ExploreFood);
		userData[userData.length-1][4]=String(H.MarketPlace);
		userData[userData.length-1][5]=String(H.Premium);
	  });
	  return userData;
};
export async function Comments  (Page) {
	let usersSnapshot=await Get_Data('Comments');
	let userData:[string,number,string,string,string][] =[]
	  usersSnapshot.forEach((doc) => {
		let H=doc.data();
		if(H.Page==Page){
		userData.push(["",0,"","",""]);
		

		userData[userData.length-1][0]=String(H.Content);
		userData[userData.length-1][1]=Number(H.Rating);
		userData[userData.length-1][2]=String(H.Date);
		userData[userData.length-1][3]=String(H.Name);
		userData[userData.length-1][4]=String(H.Image);
		}
	  });
	  return userData;
};