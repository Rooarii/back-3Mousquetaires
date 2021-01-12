module.exports = (app) => {
  // app.use('/things', thingsRoutes);
  
app.use("/", (req,res)=>{
  res.status(200).send('Server is running!')
})

};
