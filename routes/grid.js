
module.exports = router => {
  // router.get("/", gridCtrl.showGrid); 
  router.get('/', (req, res) => {
    return res.status(200).json({grid:'array days and grid settings'});
  });
}