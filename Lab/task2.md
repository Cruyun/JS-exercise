控制台console如下表格，具体题目描述请移步到Eloquent javascript 06-Object Laying out a table

```
name         height country      
------------ ------ -------------
Kilimanjaro    5895 Tanzania     
Everest        8848 Nepal        
Mount Fuji     3776 Japan        
Mont Blanc     4808 Italy/France
Vaalserberg     323 Netherlands  
Denali         6168 United States
Popocatepetl   5465 Mexico
```

表格的data以数组传入

```
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];
```
**分析：**
表格的属性有行（row）、列（column）和单元格（cell），绘制这样一个表格，我们需要知道每个cell的宽度，列的宽度就等于最宽的cell宽度。cell包含的字符串可能会换行，它的高度可能是多行，所以，row的高度等于这一行最高的那个cell的高度。

---

- 先定义一个TextCell类

```
function Textcell(text) {
    this.text = text.split("\n"); //split() 方法用于把一个字符串分割成字符串数组。
}

Textcell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};
Textcell.prototype.minHeight = function() {
    return this.text.length;
}

Textcell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}
```
draw函数生成一个二维数组，数组的每一行包含了这个cell的每一行文字。其中的每一行都需要用空格补齐到参数width指定的宽度。

this.text 保存的是二维数组，包含了cell的每一行数据。

- 接下来，把数据转换成TextCell，按照行/列存成一个二维数组：

```
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
        return new UnderlineCell(new Textcell(name));
    })
    var body = data.map(function(row) {
        return keys.map(function(name) {
            return new Textcell(String(row[name]));
        })
    })
    return [headers].concat(body);
}

var rows = dataTable(MOUNTAINS);  
```

- 接下来，计算每一行的高度，存成一个数组：
使用map逐行处理rows数组，在map的函数中使用reduce计算每个单元格数组中单元格的最大高度

```
function rowHeight(rows) {
    return rows.map(function(row) {
        return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}
```

- 计算每一列的宽度，存成一个数组：
调用第一行单元格数组的map方法，使用map函数的第二个参数（表示列索引编号）来创建一个数组，数组中的每个元素表示表格每一列的最大宽度。随后调用rows数组的reduce方法逐行遍历，计算出当前这一列单元格的最大宽度并且填入map函数创建的数组中

```
function colWidths(rows) {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
};
```

1. 外层循环用 i 来循环每一列。内层循环利用这个 i 作为列的编号，遍历每一行的第 i 列，获取cell的宽度，得到最大值。

2. 参数写成下划线，表示这个参数在函数体内不需要使用。

3. map, filter, forEach 等高阶函数都有第二个参数，是当前元素在数组中的index。

4. reduce的第二个参数是 0，这个参数是start，就是上面的函数第一次执行时的max。如果不写，默认是数组的第一个元素，而这里的数组元素是TextCell，不能用来和数字比大小

- 最后，输出table

```
function drawTable(rows) {
    var height = rowHeight(rows);
    var width = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return blocks[lineNo];
        }).join(" ");
    }
    function drawRow(row, rowNum) {
        var blocks = row.map(function(cell, colNum) {
            return cell.draw(width[colNum], height[rowNum]);
        });
        return blocks[0].map(function(_,lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }

    return rows.map(drawRow).join("\n");
}
```
这里的 block 是TextCell的draw函数返回的二维数组，我们认为它是多行字符串。drawLine函数就是把一个row中多个cell的blocks一行一行连接起来，以换行符相连。


- 还要要打印下划线，需要把标题那一行的cell定义成一种新类型的cell: UnderlinedCell

```

function UnderlineCell(inner) {
    this.inner = inner;
};
UnderlineCell.prototype.minHeight = function() {
    return this.inner.minHeight + 1;
}
UnderlineCell.prototype.minWidth = function() {
    return this.inner.minWidth;
}
UnderlineCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1)
      .concat([repeat("-", width)])
}
```

- dataTable 也需要做相应修改：

```
function dataTable(data) {  
  var keys = Object.keys(data[0]);  
  var headers = keys.map(function(name) {  
    return new UnderlinedCell(new TextCell(name));  
  });  
  var body = data.map(function(row) {  
    return keys.map(function(name) {  
      return new TextCell(String(row[name]));  
    });  
  });  
  return [headers].concat(body);  
}  

console.log(dataTable(dataTable(MOUNTAINS)))
```