interface Material {
  name: string;
}

interface Painter {
  finish(): boolean;
  ownMaterials: Material[];
  paint(painting: string, materials: Material[]): boolean;
}

// function paintPainter(painter:Painter,)
