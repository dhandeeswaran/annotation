export class Model {
}

export interface shapeDetails {
    top:number;
    left:number;
    width:number;
    height:number;
    stroke:string;
    strokeWidth:number;
    type:string;
    sid:string;
    radius:number;
    points:Array<any>;
    text:string;
    angle:number;
    path:Array<any>
}

export interface drawer {
    drawingMode:boolean;
    startPoint: object;
    endPoint: object;
    shape: any;
    strokeWidthConstant: number;

}

export interface point {
    x:number;
    y:number;
}
