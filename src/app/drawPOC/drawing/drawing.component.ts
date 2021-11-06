import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { shapeDetails } from '../drawing.model';
import {
  faCircle,
  faVectorSquare,
  faArrowRight,
  faEdit,
  faPencilAlt,
  faTextHeight,
  faRecycle,
  faTrashAlt,
  faDrawPolygon
} from '@fortawesome/free-solid-svg-icons';
import { nanoid } from 'nanoid'
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { DrawingService } from "../drawing.service"

declare let OpenSeadragon: any;
declare let fabric: any;
@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit {

  // @ViewChild('openseadragon-holder') osdElement: ElementRef;
  viewer: any;
  fabricCanvas: any;
  shapeType: string = '';
  startPointX: number = 0;
  startPointY: number = 0;
  endPointX: number = 0;
  endPointY: number = 0;
  shapeData: any;
  //shapeCollection:Array<{}> = []
  shapeCollection: any = []
  mouseMoveEnable: boolean = false;
  consolidated: any = [];
  undoRedo: any = [];
  polyLinePointCollection: any = [];
  startPolyLinePoint: any;
  getData: any;
  shapeKey: Array<any> = [];

  getdataList: any;
  getshapeData: any;
  selectedShape: any;
  isExistingShap: boolean = false;
  shapeIndex: any;
  editedShape: any;
  shapeSID: any;
  shapesGroup: any;
  strokeColor: string = 'Red';
  tileSource1: any;
  tileSource2: any;
  tilesData = [];

  shapeFormat: shapeDetails = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    stroke: '',
    strokeWidth: 0,
    type: '',
    sid: '',
    radius: 0,
    points: [],
    text: '',
    angle: 0,
    path: []

  };

  /* ICON */
  faVectorSquare = faVectorSquare;
  faCircle = faCircle;
  faDrawPolygon = faDrawPolygon;
  faArrowRight = faArrowRight;
  faEdit = faEdit;
  faTextHeight = faTextHeight;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt

  //@slider
  sliderDisabled = false;
  sliderVertical = false;
  rotateMin = 0
  rotateMax = 360
  rotateStep = 1
  rotateValue = 0
  rotateDegrees = 0;
  rotageTileIndex = NaN;
  zoomvalue: number;

  constructor(public service: DrawingService, private fb: FormBuilder) { }

  formControl() {
    this.shapesGroup = new FormGroup({
      customColor: new FormControl(),
      // fontColor:new FormControl()
    })
  }

  ngOnInit(): void {
    this.formControl();

  }

  enableRef(event) {
    console.log('enable ref')
  }
  enableCanvas(event) {
    console.log('enable canvas', event)
  }

  ngAfterViewInit() {
    this.osdTiles();
    this.OSDLayer();
    this.subscribeShape();
    // this.loadPath();
    // this.testClick();
    //this.imgMoveStart();
    //this.viewer.addHandler('canvas-click', this.clickHandler, this);
    // this.fabricCanvas.on('object:modified', this.enableRef)
    // this.fabricCanvas.addHandler('canvas-click', this.enableCanvas, this )
  }

  osdTiles() {
    this.tileSource1 = {
      Image: {
        xmlns: "http://schemas.microsoft.com/deepzoom/2008",
        Url: "http://openseadragon.github.io/example-images/highsmith/highsmith_files/",
        Format: "jpg",
        Overlap: "2",
        TileSize: "256",
        Size: {
          Height: "9221",
          Width: "7026",
        }
      }
    };
    this.tileSource2 = {
      "@context": "http://iiif.io/api/image/2/context.json",
      "@id": "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2",
      "height": 7200,
      "width": 5233,
      "profile": ["http://iiif.io/api/image/2/level2.json"],
      "protocol": "http://iiif.io/api/image",
      "tiles": [{
        "scaleFactors": [1, 2, 4, 8, 16, 32],
        "width": 1024
      }]

    };
    const osdMetaInfo = {
      Image: {
        xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
        Url: '//openseadragon.github.io/example-images/duomo/duomo_files/',
        Format: 'jpg',
        Overlap: '2',
        TileSize: '256',
        Size: {
          Width: '13920',
          Height: '10200',
        },

      },
    };
  }

  OSDLayer() {
    let image1 = {
      type: 'image',
      url: 'https://cdn.pixabay.com/photo/2017/04/23/05/56/ankle-2253057_960_720.jpg'
    }
    let image2 = {
      type: 'image',
      url: 'https://cdn.pixabay.com/photo/2018/01/03/07/36/radiography-3057768_960_720.jpg'
    }

    let image3 = {
      type: 'image',
      url: "https://cdn.pixabay.com/photo/2016/01/08/22/35/xray-1129430_960_720.jpg"
    }


    this.viewer = new OpenSeadragon.Viewer({
      id: 'openseadragon-holder',
      zoomPerClick: 2, //  1 is Disable click to zoom, 2 is Enable
      // prefixUrl: '//openseadragon.github.io/openseadragon/images/',
      // tileSources: image1,  // osdMetaInfo,// single image
      tileSources: [
        {
          tileSource: image1,//this.tileSource1,
          width: 1, //which specifies that your image will stretch from 0 to 10, and therefore your viewport coordinates go from 0 to 10.
          degrees: this.rotateValue ? this.rotateValue : 0,//this.rotateDegrees,
          y: 0,
          x: 0,
        },/* {
          tileSource: image2, //this.tileSource2,
          width: 1,
          degrees: this.rotateDegrees,
          y: 0,
          x: 1.1,
        },
        {
          tileSource: image3, //this.tileSource2,
          width: 1,
          degrees: this.rotateDegrees,
          y: 0,
          x: 2.1,
        }*/
      ],
      //  collectionMode:true,
      // sequenceMode: true,    
      //showReferenceStrip: true,
      // referenceStripScroll: 'vertical',

      debugMode: true,
      // minZoomImageRatio:  5,
      // maxZoomImageRatio:5,
      // degrees: 90,
      // showRotationControl: true,
      //   collectionMode:       true,
      // collectionRows:       2, 
      // collectionTileSize:   1024,
      // collectionTileMargin: 256,
      //collectionLayout:     'horizontal',
      controlsFadeDelay: 90000,
      gestureSettingsTouch: {
        pinchRotate: true,
      },
      // overlays: [{
      //   id: 'freeDraw',
      //   px: 0,
      //   py: 0,
      //   width: 13920,
      //   height: 10200,
      //   placement: 'RIGHT',
      //   checkResize: false
      // }],

    });
    this.fabricCanvas = this.viewer.fabricjsOverlay({ scale: 1000 }).fabricCanvas();
    this.viewer.setMouseNavEnabled(false);
  }

  getImagePosition(webPoint) {
    let item, box, containsPoint;
    //let point= this.viewer.viewport.pointFromPixel(webPoint)
    for (let i = 0; i < this.viewer.world.getItemCount(); i++) {
      item = this.viewer.world.getItemAt(i);
      box = item.getBounds();
      // console.log('dfa', this.viewer.containsPoint(webPoint))
      containsPoint = box.containsPoint(webPoint);

    }

    console.log('image status', box, containsPoint)

  }

  private clickHandler(event) {
    console.log('canvas-click', event)
  }

  osdMouseClick(event: MouseEvent) {
    this.fabricCanvas.on('mouse:down', this.osdMouseDown);
    this.fabricCanvas.on('mouse:up', this.osdMouseUp);
    this.fabricCanvas.on('mouse:move', this.osdMouseMove);
    let imageIndex = [];
    for (let i = 0; i < this.viewer.source.levels.length; i++) {
      console.log('url', this.viewer.source.levels[i].url)
      let s = this.viewer.tileSources.findIndex(x => x.tileSource.url === this.viewer.source.levels[i].url);
      console.log('sssss', s)

      for (let k = 0; k < this.viewer.tileSources.length; k++) {
        console.log('tiles', this.viewer.tileSources[k].tileSource.url)
        console.log('index', this.viewer.tileSources[k].tileSource.url.indexOf(this.viewer.source.levels[i].url))
        // imageIndex.push(imageIndex)

      }

    }

    // index = a.findIndex(x => x.prop2 ==="yutu");
    //let s =this.viewer.tileSources(x =>x.tileSource.url == )
    console.log('select', imageIndex)

    //this.viewer.a
    this.getImagePosition(this.fabricCanvas.getPointer(event))
    console.log("###### POINTER #####", this.fabricCanvas.getPointer(event), event)
    console.log('viewr%%%%%', this.viewer)
    this.zoomvalue = this.viewer.viewport.getZoom();
    console.log('flag', this.isExistingShap)
    console.log('mouse click shape Index', this.shapeIndex, this.shapeSID, this.getData)
    let shapeId = this.shapeSID
    var results = this.getData.filter(function (x: any) { return x.sid === shapeId });
    if (this.shapeSID !== '') {
      console.log('put', this.shapeSID, results)
      this.put(this.selectedShape, this.shapeIndex)
    }
    console.log('result', results)
    this.selectedShape = this.fabricCanvas.getActiveObject();
    if (this.selectedShape) {
      this.shapeType = this.selectedShape.type
    }
    console.log('Mouse Click', this.mouseMoveEnable, event)
    if (this.shapeType === 'PolyLine') {
      let polyLinePoint = this.fabricCanvas.getPointer(event);
      this.polyLinePointCollection.push(polyLinePoint);
      this.startPolyLinePoint = this.polyLinePointCollection[0]
      console.log('poly', this.startPolyLinePoint, this.polyLinePointCollection)
      this.shadowPolyLine(this.polyLinePointCollection, this.strokeColor)
    }
    console.log('selected from viewer', this.selectedShape, this.shapeType, this.isExistingShap)
    if (this.isExistingShap) {
      this.formateObject(this.selectedShape)
    }

  }



  formateObject(data: any) {
    console.log('Format Object SAVE ---', data)
    console.log('Shape Index', this.shapeIndex, this.selectedShape)
    if (this.shapeFormat) {
      this.shapeFormat.width = data.width
      this.shapeFormat.height = data.height
      this.shapeFormat.top = data.top
      this.shapeFormat.left = data.left
      this.shapeFormat.type = data.type
      this.shapeFormat.strokeWidth = data.strokeWidth
      this.shapeFormat.stroke = data.stroke
      this.shapeFormat.sid = data.id
      this.shapeFormat.radius = data.radius
      this.shapeFormat.points = data.points
      this.shapeFormat.text = data.text
      this.shapeFormat.angle = data.angle
      this.shapeFormat.path = data.path
    }
    if (this.isExistingShap) {
      console.log('#### PUT #####')
      this.put(this.shapeFormat, this.shapeIndex)
    }
    else {
      console.log('#### POST #####')
      this.save(this.shapeFormat)
    }
  }

  osdMouseDoubleClick(event: MouseEvent) {
    this.viewer.collectionMode = false;
    this.viewer.sequenceMode = true;
    console.log('Mouse Double Click', event);
    if (this.shapeType === 'polyline') {
      this.polyLinePointCollection.push(this.startPolyLinePoint);
      this.shapeType = 'completePolyLine';
      this.shapeData = null
    }
    if (this.shapeType === 'completePolyLine') {
      this.shapeData = this.createPolyLine(this.polyLinePointCollection, this.strokeColor)
      this.fabricCanvas.add(this.shapeData);
      this.fabricCanvas.renderAll();
      // var obj = this.fabricCanvas.getActiveObject();
      //let Myid= this.fabricCanvas.getActiveObject().get('id');
      //console.log('myID', Myid);
      //this.fabricCanvas.remove(obj)
      console.log('poly complet', this.polyLinePointCollection)
      console.log('poly', this.shapeData, this.createPolyLine)
      if (this.shapeData) {
        this.shapeCollection.push(this.shapeData)
        this.formateObject(this.shapeData);
        this.shapeType = 'null';
      }
      console.log('this.shapeTyp', this.shapeType)
      this.polyLinePointCollection = [];
    }

  }

  // @HostListener('mousedown', ['$event'])
  osdMouseDown(event: MouseEvent) {
    console.log('Mouse Down', this.shapeType)
    console.log('Shape Index', this.shapeIndex)
    this.mouseMoveEnable = true;
    if (event.offsetX !== undefined) {
      this.startPointX = this.fabricCanvas.getPointer(event).x;
      this.startPointY = this.fabricCanvas.getPointer(event).y;
      if (this.shapeType === 'Rectangle' || this.shapeType === 'Rect') {
        //this.imgMoveStop();
        console.log('Mouse Down #####', event)
        console.log('starting Point', this.fabricCanvas.getPointer(event))
        this.createRectangleShape(this.startPointX, this.startPointY, 0, 0, this.strokeColor);
      }
      if (this.shapeType === 'Circle') {
        console.log('DRAW CIRCLE');
        this.createCircle(this.startPointX, this.startPointY, 0, this.strokeColor)
      }
      if (this.shapeType === 'Text') {
        console.log('DRAW CIRCLE');
        this.creatItext(this.startPointX, this.startPointY, 'hai', this.strokeColor)
      }
    }
  }

  // @HostListener('mouseup', ['$event'])
  osdMouseUp(event: MouseEvent) {
    console.log('mouse UP selected Data', this.shapeData)
    console.log('mouse up selected Index', this.shapeIndex)
    if (event.target !== undefined) {
      console.log('Mouse UP ############');
      console.log('mouseup cord', event.target)
    }
    if (event.offsetX !== undefined) {
      if (this.shapeType === 'Rect' || this.shapeType === 'Rectangle' || this.shapeType === 'Circle' || this.shapeType === 'Text' || this.shapeType === 'pencil') {
        if (this.fabricCanvas.freeDrawingBrush._points.length > 1) {
          this.shapeData.set({ path: this.fabricCanvas.freeDrawingBrush._points })
        }
        if (this.shapeData) {
          // this.shapeData.angle = this.rotateValue; // revisit 

          this.shapeCollection.push(this.shapeData)
          console.log('cre', this.shapeData)
          this.formateObject(this.shapeData);
          this.shapeType = 'null';
        }
        this.mouseMoveEnable = false;
        this.viewer.setMouseNavEnabled(true);
      }
      if (this.shapeType === 'LineArrow') {
        let arrowUpPoints = this.fabricCanvas.getPointer(event);
        let endX = arrowUpPoints.x;
        let endY = arrowUpPoints.y;
        this.drawArrow(this.startPointX, this.startPointY, endX, endY, this.strokeColor)
        if (this.shapeData) {
          this.shapeCollection.push(this.shapeData)
          this.formateObject(this.shapeData);
          this.shapeType = 'null';
        }
      }

    }
    this.selectedShape = true;
  }

  // @HostListener('mousemove', ['$event'])
  osdMouseMove(event: MouseEvent) {
    if (event.offsetX !== undefined) {
      let movedPoint = this.fabricCanvas.getPointer(event);
      // console.log('****WIDTH ****', Math.abs(this.startPointX - movedPoint.x))
    }
    if (event.offsetX !== undefined) {
      let movedPoint = this.fabricCanvas.getPointer(event);
      if (this.mouseMoveEnable && movedPoint && this.startPointX && this.shapeData !== undefined) {
        // console.log('Mouse MOVE width',  Math.abs(this.startPointX - movedPoint.x))
        if (this.shapeType === 'Rectangle' || this.shapeType === 'Rect') {
          this.shapeData.set({
            left: this.startPointX < movedPoint.x ? this.startPointX : movedPoint.x,
            top: this.startPointY < movedPoint.y ? this.startPointY : movedPoint.y,
            width: Math.abs(this.startPointX - movedPoint.x),
            height: Math.abs(this.startPointY - movedPoint.y)
          });
          console.log('dsadfasfasdfdasfasfds')
          this.fabricCanvas.setActiveObject(this.shapeData);
          this.fabricCanvas.renderAll();
        }
        if (this.shapeType === 'Circle') {
          this.shapeData.set({
            radius: Math.abs(this.startPointX - movedPoint.x)
          })
          this.fabricCanvas.setActiveObject(this.shapeData)
          this.fabricCanvas.renderAll();
        }

      }
    }
  }

  drawShape(shapeAction: any) {
    this.isExistingShap = false;
    console.log('shape type', shapeAction, nanoid())
    this.shapeType = shapeAction;
    // this.imgMoveStop();
    this.viewer.setMouseNavEnabled(false);
    if (shapeAction === "pencil") {
      this.shapeType = "pencil"
      this.shapeData = new fabric.Canvas('freeDraw', {})
      this.shapeData.type = 'pencil'
      this.shapeData.id = nanoid();
      this.fabricCanvas.freeDrawingBrush.color = 'green';
      this.fabricCanvas.freeDrawingBrush.width = 5;
      this.fabricCanvas.isDrawingMode = true;
      this.viewer.setMouseNavEnabled(false);
    }

    if (shapeAction === "pencilBrush") {
      //  this.fabricCanvas.isDrawingMode = true;
      let shapdata = new fabric.PencilBrush({
        left: 100,
        top: 300,
        decimate: 8, color: 'red', width: 10
      })
      this.fabricCanvas.add(shapdata).renderAll();
    }

  }

  createRectangleShape(x?: number, y?: number, w?: number, h?: number, color?: string, angle?: number) {
    console.log('cee')
    this.shapeData = new fabric.Rect({
      type: 'Rect',
      left: x,
      top: y,
      width: w ? w : 0,
      height: h ? h : 0,
      fill: '',
      stroke: color ? color : 'red',
      strokeWidth: 5,
      angle: angle ? angle : 0,
      cornerColor: 'green',
      cornerSize: 6,
      transparentCorners: false
    })
    this.shapeData.id = nanoid();
    this.fabricCanvas.add(this.shapeData);
    this.fabricCanvas.renderAll();
  }

  createCircle(x?: number, y?: number, r?: number, color?: string) {
    console.log('cirlce', x, y, r)
    this.shapeData = new fabric.Circle({
      type: 'circle',
      left: x,
      top: y,
      radius: r ? r : 0,
      fill: '',
      stroke: color ? color : 'red',
      strokeWidth: 10,
      originX: 'center',
      originY: 'center'
    });
    this.shapeData.id = nanoid();
    this.fabricCanvas.add(this.shapeData);

  }

  createPolyLine(points: Array<any>, color?: string) {
    this.shapeData = new fabric.Polyline(points, {
      fill: '',
      stroke: color ? color : 'orange',
      strokeWidth: 5,
    })
    if (this.shapeType === 'completePolyLine') {
      this.shapeData.id = nanoid();
      this.shapeCollection.push(this.shapeData)
      console.log('poly data', this.shapeData);
      console.log('poly Arrya', this.shapeCollection);
      this.shapeType = 'finish';
      this.mouseMoveEnable = false;
      // this.fabricCanvas.add(this.shapeData);
      // this.fabricCanvas.renderAll();
      //this.fabricCanvas.setActiveObject(this.shapeData)
    }
    this.fabricCanvas.add(this.shapeData);
    this.fabricCanvas.renderAll();

  }

  shadowPolyLine(points: Array<any>, color?: string) {
    this.shapeData = new fabric.Polyline(points, {
      fill: '',
      stroke: color ? color : 'orange',
      strokeWidth: 5
    })
    if (this.shapeType === 'completePolyLine') {
      this.shapeData.id = nanoid();
      this.shapeData = {}
      this.shapeCollection.push(this.shapeData)
      console.log('poly data', this.shapeData);
      console.log('poly Arrya', this.shapeCollection);
      this.shapeType = 'finish'
      // this.fabricCanvas.add(this.shapeData);
      // this.fabricCanvas.renderAll();
    }
    this.fabricCanvas.add(this.shapeData);
    this.fabricCanvas.renderAll();

  }

  loadPath() {
    const temp = ["M", 281.6495878092448, 111.995]
    this.shapeData = new fabric.Path(temp, {
      strokeWidth: 3,
      stroke: 'green',
      fill: 'green',
      selectable: false,
      hasRotatingPoint: false
    });
    // as CustomFabricPath;
    // path.id = uuid();
    this.fabricCanvas.add(this.shapeData);
    this.fabricCanvas.renderAll();
  }

  loadPolyline(points: Array<any>, x?: number, y?: number) {
    this.shapeData = new fabric.Polyline(points, {
      fill: '',
      stroke: 'orange',
      strokeWidth: 5,
      left: x ? x : null,
      top: y ? y : null
    })
    this.fabricCanvas.add(this.shapeData);
  }

  unsetEvent() {
    this.viewer.setMouseNavEnabled(!this.mouseMoveEnable); // revisit
  }

  selectItem(details: any, index: number) {
    this.mouseEventOn();
    let objectData = this.fabricCanvas.getActiveObject()
    this.fabricCanvas.setActiveObject(this.fabricCanvas.item(index + 1))
    //this.fabricCanvas.setActiveObject(0)
    this.shapeIndex = details.id
    this.shapeSID = details.sid
    this.shapeType = details.type
    this.editedShape = details.type   // this.shapeData = details;
    this.isExistingShap = true;
    console.log('select Item', details.id, details.type, this.shapeIndex);
    this.viewer.setMouseNavEnabled(false);
    //let objectData =  this.fabricCanvas.getActiveObject();
    //this.viewer.world.getItemAt(0).setRotation(180, true);
    // console.log('totad', objectData)
    // this.shapeType = objectData.type
    //this.mouseMoveEnable = true;
    // this.fabricCanvas.setActiveObject(this.fabricCanvas.item(0));
    // this.fabricCanvas.setActiveObject(0);
    // this.fabricCanvas.requestRenderAll();
    //this.fabricCanvas.setActiveObject(objectData);
    this.fabricCanvas.renderAll();
  }

  save(shapData: any) {
    this.service.postShape(shapData).subscribe(a => {
      console.log('SAVE SUBCRIBE', a)
      if (a) {
        this.subscribeShape();
      }
    });
  }

  subscribeShape() {
    this.service.getShape().subscribe(res => {
      this.getData = res;
      console.log('PAGE LOAD SUBCRIBE DATA', this.getData)
      for (let i = 0; i < this.getData.length; i++) {
        if (this.getData[i].type === 'Rect') {

          // this.createRectangleShape(this.getData[i].left, this.getData[i].top, this.getData[i].width, this.getData[i].height, this.getData[i].stroke, this.getData[i].angle);
          this.fabricCanvas.clear();
          // this.rotateValue = 120;
          this.reCreateObjects();
        }
        if (this.getData[i].type === 'circle') {
          this.createCircle(this.getData[i].left, this.getData[i].top, this.getData[i].radius, this.getData[i].stroke);
        }
        if (this.getData[i].type === 'arrow') {
          this.loadArrowLine(this.getData[i].points, this.getData[i].stroke)
          //this.drawArrow(this.getData[i].left, this.getData[i].top, this.getData[i].radius);
        }
        if (this.getData[i].type === 'polyline') {
          this.loadArrowLine(this.getData[i].points, this.getData[i].stroke)
          //this.drawArrow(this.getData[i].left, this.getData[i].top, this.getData[i].radius);
        }
        if (this.getData[i].type === 'i-text') {
          console.log('arrow', this.getData[i])
          this.creatItext(this.getData[i].left, this.getData[i].top, this.getData[i].text, this.getData[i].stroke)
          //this.drawArrow(this.getData[i].left, this.getData[i].top, this.getData[i].radius);
        }
        if (this.getData[i].type === 'pencil') {
          this.loadArrowLine(this.getData[i].path, this.getData[i].stroke)
          //this.drawArrow(this.getData[i].left, this.getData[i].top, this.getData[i].radius);
        }

      }
    });
  }

  put(shapeData: any, id: string) {
    this.service.putShape(shapeData, id).subscribe(a => {
      console.log('put', a)
    });
  }


  mouseEventOn() {
    this.fabricCanvas.on('mouse:down', this.osdMouseDown);
    this.fabricCanvas.on('mouse:up', this.osdMouseUp);
    this.fabricCanvas.on('mouse:move', this.osdMouseMove);
  }

  mouseEventOff() {
    this.fabricCanvas.off('mouse:down', this.osdMouseDown);
    this.fabricCanvas.off('mouse:up', this.osdMouseUp);
    this.fabricCanvas.off('mouse:move', this.osdMouseMove);
  }

  loadArrowLine(points: any, color?: string) {
    this.shapeData = new fabric.Polyline(points, {
      fill: '',
      stroke: color ? color : 'red',
      background: 'red',
      opacity: 1,
      strokeWidth: 5,
      originX: 'left',
      originY: 'top',
      selectable: true,
      type: 'arrow'
    });
    this.fabricCanvas.add(this.shapeData);
    this.fabricCanvas.renderAll();
  }

  creatItext(x: number, y: number, text: string, color: string) {
    let txt = text ? text : 'hello'
    this.shapeData = new fabric.IText(txt, {
      left: x,
      top: y,
      fill: color ? color : 'red',
      stroke: color ? color : 'red',
      strokeWidth: 2,
      lineHeight: 2
      // originX: 'center',
      // originY: 'center'
    });
    this.shapeData.id = nanoid();
    this.fabricCanvas.add(this.shapeData);
    this.fabricCanvas.renderAll();
  }


  drawArrow(fromX: number, fromY: number, toX: number, toY: number, color: string) {
    console.log('drwarrow',)
    let arrowAngle = Math.atan2(toY - fromY, toX - fromX);
    let arrowHeadSize = 15;
    toX = toX - (arrowHeadSize) * Math.cos(arrowAngle);
    toY = toY - (arrowHeadSize) * Math.sin(arrowAngle);
    let points = [
      {
        x: fromX,
        y: fromY
      },
      {
        x: fromX - (arrowHeadSize / 4) * Math.cos(arrowAngle - Math.PI / 2),
        y: fromY - (arrowHeadSize / 4) * Math.sin(arrowAngle - Math.PI / 2)
      },
      {
        x: toX - (arrowHeadSize / 4) * Math.cos(arrowAngle - Math.PI / 2),
        y: toY - (arrowHeadSize / 4) * Math.sin(arrowAngle - Math.PI / 2)
      },

      {
        x: toX - (arrowHeadSize) * Math.cos(arrowAngle - Math.PI / 2),
        y: toY - (arrowHeadSize) * Math.sin(arrowAngle - Math.PI / 2)
      },

      {
        x: toX + (arrowHeadSize) * Math.cos(arrowAngle),
        y: toY + (arrowHeadSize) * Math.sin(arrowAngle)
      },

      {
        x: toX - (arrowHeadSize) * Math.cos(arrowAngle + Math.PI / 2),
        y: toY - (arrowHeadSize) * Math.sin(arrowAngle + Math.PI / 2)
      },
      {
        x: toX - (arrowHeadSize / 4) * Math.cos(arrowAngle + Math.PI / 2),
        y: toY - (arrowHeadSize / 4) * Math.sin(arrowAngle + Math.PI / 2)
      },
      {
        x: fromX - (arrowHeadSize / 4) * Math.cos(arrowAngle + Math.PI / 2),
        y: fromY - (arrowHeadSize / 4) * Math.sin(arrowAngle + Math.PI / 2)
      },
      {
        x: fromX,
        y: fromY
      }
    ];

    console.log('arrow points', points)
    this.shapeData = new fabric.Polyline(points, {
      fill: color ? color : 'red',
      stroke: color ? color : 'red',
      background: 'red',
      opacity: 1,
      strokeWidth: 5,
      originX: 'left',
      originY: 'top',
      selectable: true,
      type: 'arrow'
    });
    this.shapeData.id = nanoid();
    this.fabricCanvas.add(this.shapeData);
    this.fabricCanvas.renderAll();
  }

  clk(event: any) {
    // this.viewer.goToPage(0)
    // var tiledImage = this.viewer.world.getItemAt(0);
    // var viewportPosRect = new OpenSeadragon.Rect(20, 30, 10,10);
    //             var tileSourcePosRect = tiledImage._viewportToTiledImageRectangle(viewportPosRect);
    // console.log('image', this.viewer.world.getIndexOfItem())
    // this.viewer.addHandler('canvas-click', function (event:any) {
    //   console.log('canvas...', event.target)
    // });
  }

  imgMoveStop() {
    this.viewer.addHandler('canvas-drag', function (event: any) {
      event.preventDefaultAction = true;
    });
  }

  imgMoveStart() {
    this.viewer.addHandler('canvas-drag', function (event: any) {
      event.preventDefaultAction = false;

    });
  }

  selectStrokeColor(event: any) {
    this.strokeColor = event.value
  }

  selectTile(tile: number) {
    this.rotageTileIndex = tile
    this.viewer.world.getItemAt(0).setRotation(90, true);
  }

  delete(id: number, index: number) {
    // this.fabricCanvas.setActiveObject(this.fabricCanvas.item(index+1))
    let del;
    console.log('delete', id, index)
    this.service.deleteShape(id).subscribe(res => {
      if (res) {
        del = res;
        console.log('delete res', res)
        this.subscribeShape();
      }

    });
    var activeObject = this.fabricCanvas.getActiveObject()
    console.log('delete res', activeObject)
    //this.fabricCanvas.item(index+1)
    if (confirm('Are you sure?')) {
      this.fabricCanvas.remove(activeObject);
    }
    this.fabricCanvas.renderAll();
  }

  getTile() {
    var i, tiledImage;
    var count = this.viewer.world.getItemCount();
    var tilesData;
    for (i = 0; i < count; i++) {
      var tileData = this.tilesData[i];
      var imagePoint = new OpenSeadragon.Point(tileData.x, tileData.y);
      const viewerPoint = tiledImage.imageToViewportCoordinates(imagePoint);
      tiledImage = this.viewer.world.getItemAt(i);
      tiledImage.setPosition(viewerPoint);
      console.log('tileimag', tiledImage)
    }

  }

  reCreateObjects() {
    let annotations = this.getData
    console.log('RECREATED object', this.fabricCanvas.getObjects(), this.getData)
    //let annotations =  this.fabricCanvas.getObjects();
    // console.log('rere', new fabric.Point(annotations[1].left, annotations[1].top))

    for (let i = 0; i < annotations.length; i++) {
      console.log('annotation', annotations[i].type) //this.fabricCanvas.getVpCenter()
      if (annotations[i].type === 'Rect') {
        let posNewCenter = fabric.util.rotatePoint(new fabric.Point(annotations[i].left, annotations[i].top), this.fabricCanvas.getVpCenter(), fabric.util.degreesToRadians(this.rotateValue))
        this.createRectangleShape(posNewCenter.x, posNewCenter.y, annotations[i].width, annotations[i].height, annotations[i].color, this.rotateValue)
      }
    }

  }

  rotateSlider() {
    // this.viewer.world.getItemAt(this.rotageTileIndex).setRotation(this.rotateValue, false);
    this.viewer.world.getItemAt(0).setRotation(this.rotateValue, true);
    this.fabricCanvas.clear();
    setTimeout(() => {
      this.reCreateObjects();
    }, 500);



    var objs = this.fabricCanvas.getObjects().map(function (o) {
      return o.set('active', true);
    });
    console.log("all objs", objs)
    // this.fabricCanvas.clear();
    // let fabRect =  new fabric.Rect({
    //   type:'Rect',
    //   left:345.9638005503369,
    //   top:374.0371352208498,
    //   width:200,
    //   height:300,
    //   fill:'',
    //   stroke:'blue',
    //   strokeWidth:5,
    //   angle:this.rotateValue
    // });
    // this.fabricCanvas.add(fabRect);

    // this.fabricCanvas.renderAll();


    // let posNewCenter = fabric.util.rotatePoint(
    //   new fabric.Point(3.279277730334943,2.952911082815316),
    //   this.fabricCanvas.getVpCenter(),
    //   fabric.util.degreesToRadians(this.rotateValue)
    // )
    //(178.5,234)

    let posNewCenter = fabric.util.rotatePoint(new fabric.Point(3.279277730334943, 2.952911082815316), new fabric.Point(358.8560208105469, 551.8799423217773), fabric.util.degreesToRadians(this.rotateValue))
    console.log('rect xy', posNewCenter, this.fabricCanvas.getVpCenter())
    // console.log('center', this.fabricCanvas.getVpCenter(), new fabric.Point(3.279277730334943,2.952911082815316))
    console.log("osgetContentSized##", this.viewer.world.getItemAt(0).getContentSize())
    console.log("bounds##", this.viewer.world.getItemAt(0).getBounds())
    console.log('tile det', this.viewer.world.getItemAt(0))
    let bounds = this.viewer.world.getItemAt(0).getBounds()
    console.log('bounds', bounds)
    //let check=  this.viewer.viewport.imageToViewportCoordinates(bounds.x, bounds.y)
    //console.log('count', this.viewer.world.getItemCount(), check)

    let tiledImage = this.viewer.world.getItemAt(0)
    let box = tiledImage.getBounds(true)
    console.log(box)

    //var viewportCenter = this.viewer.viewport.getCenter();
    //var imageCenter = this.viewer.viewport.viewportToImageCoordinates(viewportCenter.x, viewportCenter.y);
    // console.log('center', imageCenter)
    //console.log('size', this.viewer.world.getSize())
    // var box = new OpenSeadragon.Rect(0.25, 0.25, 0.5, 0.5);
    // this.viewer.viewport.fitBounds(box, true);
    //   rect.set({
    //     left: posNewCenter.x,
    //     top: posNewCenter.y,
    //     angle: this.value
    // });
    // this.shapeData.set({
    //        left: posNewCenter.x,
    //     top: posNewCenter.y,
    //     angle: this.rotateValue
    // });


    /* this.fabricCanvas.clear();
     let fabRect =  new fabric.Rect({
         type:'Rect',
         left:posNewCenter.x,
         top: posNewCenter.y,
         width:186.91883062909196,
         height:224.7503914033589,
         fill:'',
         stroke:'red',
         strokeWidth:5,
         angle:this.rotateValue
    });
   this.fabricCanvas.add(fabRect);
  
   this.fabricCanvas.renderAll();*/

    console.log('alla', this.shapeData)

  }

  resetRotation() {
    this.viewer.world.getItemAt(0).setRotation(0, true);
    this.viewer.world.getItemAt(1).setRotation(0, true);
    this.rotateValue = 0;
    //this.subscribeShape();
    console.log('fab', this.fabricCanvas.getObjects())

    /* var group = new fabric.Group(this.fabricCanvas.getObjects());
 
                 group.rotate(90);
 
                 this.fabricCanvas.centerObject(group);
                 group.setCoords();
                 this.fabricCanvas.renderAll();*/
  }

  rotateShape() {
    var group = new fabric.Group(this.fabricCanvas.getObjects(), {
      width: 600,
      height: 750,
      top: 100,
      left: 400,
      originX: 'center',
      originY: 'center',
      angle: 90
    });
    //  group.rotate(90);
    //  this.fabricCanvas.centerObject(group);
    group.setCoords();
    group.remove();
    this.fabricCanvas.renderAll();
  }

  //pathCreated
  createPath(data: any) {
    let path
    console.log('final path', this.fabricCanvas.freeDrawingBrush._points)
    this.shapeData.path = this.fabricCanvas.freeDrawingBrush._points
    this.fabricCanvas.on('path:created', function (opt) {
      // opt.path is a fabric.Path ready to use and already on the canvas
      console.log("path createeeeeee", data)
      console.log("path createeeeeee", this, opt.path instanceof fabric.Path, opt)
      console.log(opt.path.path);
      if (opt.path.path) {
        // this.shapeData.set({path:opt.path.path})
      }
      path = opt.path.path
      console.log(opt.path.path.map(chunk => {
        return chunk.join(' ');
      }).join(' '))
      // return opt.path.path
    })


  }

  newCoordinate() {
    let x = 350.88271714583925;
    let y = 300.21402647309986;
    let x1 = 10, x2 = 50, y1 = 40, y2 = 70
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    let deg = Math.atan2(deltaY, deltaX) * 180.0 / Math.PI;
    console.log('new cor', deg)
    let m = x * Math.sin(90); let n = y * Math.cos(90)
    console.log("test co", m, n)
    // this.createRectangleShape(m,n,  42.6306104943543, 42.65335895246227, 'blue', 0)
    this.createRectangleShape(300.2140264731, -350.88271714584, 42.65335895246227, 42.65335895246227, 'blue', 0)
  }





  //Handler
  testClick() {
    this.viewer.addHandler('canvas-click', this.osdAction, { service: this, handler: this.osdAction });
  }

  osdAction(event) {
    console.log('canvas click event, event', event)
  }

}
