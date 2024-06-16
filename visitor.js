/**
 * The Shape interface declares a method `accept` that should take the base
 * visitor interface as an argument.
 */
/**
 * Each Concrete Shape must implement the `accept` method in such a way that
 * it calls the visitor's method corresponding to the shape's class.
 */
var Circle = /** @class */ (function () {
    function Circle(radius) {
        if (radius === void 0) { radius = 2; }
        this.radius = radius;
    }
    /**
     * Note that we're calling `visitCircle`, which matches the
     * current class name. This way we let the visitor know the class of the
     * shape it works with.
     */
    Circle.prototype.accept = function (visitor) {
        visitor.visitCircle(this);
    };
    /**
     * Circle may have special methods that don't exist in their
     * base class or interface. The Visitor is still able to use these methods
     * since it's aware of the shape's concrete class.
     */
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        if (width === void 0) { width = 4; }
        if (height === void 0) { height = 6; }
        this.width = width;
        this.height = height;
    }
    /**
     * Same here: visitRectangle => Rectangle
     */
    Rectangle.prototype.accept = function (visitor) {
        visitor.visitRectangle(this);
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    return Rectangle;
}());
/**
 * Concrete Visitors implement several versions of the same algorithm, which can
 * work with all concrete shape classes.
 */
var ShapeAreaVisitor = /** @class */ (function () {
    function ShapeAreaVisitor() {
    }
    ShapeAreaVisitor.prototype.visitCircle = function (circle) {
        var area = Math.PI * Math.pow(circle.getRadius(), 2);
        console.log("Area of Circle: ".concat(area.toFixed(2)));
    };
    ShapeAreaVisitor.prototype.visitRectangle = function (rectangle) {
        var area = rectangle.getWidth() * rectangle.getHeight();
        console.log("Area of Rectangle: ".concat(area));
    };
    return ShapeAreaVisitor;
}());
var ShapePerimeterVisitor = /** @class */ (function () {
    function ShapePerimeterVisitor() {
    }
    ShapePerimeterVisitor.prototype.visitCircle = function (circle) {
        var perimeter = 2 * Math.PI * circle.getRadius();
        console.log("Perimeter of Circle: ".concat(perimeter.toFixed(2)));
    };
    ShapePerimeterVisitor.prototype.visitRectangle = function (rectangle) {
        var perimeter = 2 * (rectangle.getWidth() + rectangle.getHeight());
        console.log("Perimeter of Rectangle: ".concat(perimeter));
    };
    return ShapePerimeterVisitor;
}());
/**
 * The client code can run visitor operations over any set of elements without
 * figuring out their concrete classes. The accept operation directs a call to
 * the appropriate operation in the visitor object.
 */
function clientCode(shapes, visitor) {
    for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
        var shape = shapes_1[_i];
        shape.accept(visitor);
    }
}
var shapes = [
    new Circle(5),
    new Rectangle(10, 15)
];
console.log('Calculating areas using ShapeAreaVisitor:');
var areaVisitor = new ShapeAreaVisitor();
clientCode(shapes, areaVisitor);
console.log('');
console.log('Calculating perimeters using ShapePerimeterVisitor:');
var perimeterVisitor = new ShapePerimeterVisitor();
clientCode(shapes, perimeterVisitor);
//# sourceMappingURL=visitor.js.map