export interface GeometryModel {
    bbox:           number[];
    crs:            CRS;
    features:       Feature[];
    numberMatched:  number;
    numberReturned: number;
    timeStamp:      string;
    totalFeatures:  number;
    type:           string;
}

export interface CRS {
    properties: CRSProperties;
    type:       string;
}

export interface CRSProperties {
    name: string;
}

export interface Feature {
    geometry:      Geometry;
    geometry_name: GeometryName;
    id:            string;
    properties:    FeatureProperties;
    type:          FeatureType;
}

export interface Geometry {
    coordinates: Array<Array<Array<number[]>>>;
    type:        GeometryType;
}

export enum GeometryType {
    MultiPolygon = "MultiPolygon",
}

export enum GeometryName {
    TheGeom = "the_geom",
}

export interface FeatureProperties {
    Tile: string;
    bbox: number[];
    h:    number;
    v:    number;
}

export enum FeatureType {
    Feature = "Feature",
}