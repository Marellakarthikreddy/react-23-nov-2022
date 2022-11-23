const express=require("express")
const app=express()
const cors=require("cors")
const port=4000;
const emp=[
	{id:203114,name:"karthik",age:19,avatar:"https://images.indianexpress.com/2022/05/Mahesh-Babu-1200by667.jpg"},
	{id:203109,name:"siva",age:19,avatar:"https://igimages.gumlet.io/tamil/home/vikram300522_4.jpg?w=376&dpr=2.6"},
	{id:203116,name:"rajesh",age:19,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKyS022Jw3KjNE5NR4ItwYZ04Y3nFPv7F_5AlRdYU8QXRaxxZollbkY-7hQ4o-gvcdto&usqp=CAU"},
	{id:203125,name:"trinath",age:20,avatar:"https://naasongsmix.com/wp-content/uploads/2022/11/jambalakidi-jaru-mitaya.jpg"}
]
app.use(cors())
	const students=require("./data.js")
app.get("/",(req,res)=>{
	res.send("hi this is my server")
})
app.get("/user",(req,res)=>{
	res.send("hello world")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/students",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("server"))





