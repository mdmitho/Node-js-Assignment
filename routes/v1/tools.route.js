const express = require("express");

const toolsControllers = require("../../controllers/tools.controller");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/veiwCount");

const router = express.Router()


// router.get("/",(req,res)=>{
//     res.send("Parts found")
// })


// router.post("/parts",(req,res)=>{
//     res.send("Parts post added")
// })



router
  .route("/")
  /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @aoiPermission admin
   *
   * @apiHeader {String} Authorization Users access token
   *
   * @apiParam {Number{1-}}     [page=1] list page
   * @apiSuccess {Number{1-100}}    [Limit=10] User per Page
   *
   * @apiSuccess {Object[]} all the tools
   *
   * @apiError (Unauthorized  401) Unauthorized users can acess the data
   * @apiError (Forbidden 403)  Forbidden Only admins can access the data
   *
   */

  .get(toolsControllers.getAllParts)

  /**
   * @api {Post} /tools Save a tools
   * @apiDescription Get all the tools
   * @aoiPermission admin
   *
   * @apiHeader {String} Authorization Users access token
   *
   * @apiParam {Number{1-}}     [page=1] list page
   * @apiSuccess {Number{1-100}}    [Limit=10] User per Page
   *
   * @apiSuccess {Object[]} all the tools
   *
   * @apiError (Unauthorized  401) Unauthorized users can acess the data
   * @apiError (Forbidden 403)  Forbidden Only admins can access the data
   *
   */

  .post(toolsControllers.saveAParts);

  router.route("/:id")
  .get(viewCount, limiter, toolsControllers.getToolDEtail)
  .patch(toolsControllers.updateTool)
  .delete(toolsControllers.deleteTool)


module.exports = router