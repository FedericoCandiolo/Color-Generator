import { useState } from 'react';
import copy from 'copy-to-clipboard';

const Color = (props) => {
  const isColor = (color) => color.length === 7;

  const hexToColor = (color_str) => {
    if (isColor(color_str)) {
      let hexToDec = (hex) => {
        let options = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
        ];
        if (hex) {
          let first = hex.slice(-1);
          return (
            options.indexOf(first) + options.length * hexToDec(hex.slice(0, -1))
          );
        }
        return 0;
      };
      let r_str = color_str.slice(1, 3);
      let g_str = color_str.slice(3, 5);
      let b_str = color_str.slice(5, 7);

      let color = {
        r: hexToDec(r_str),
        g: hexToDec(g_str),
        b: hexToDec(b_str),
      };
      return color;
    } else return null;
  };

  const colorToHex = (color_obj) => {
    const decToHex = (dec) => {
      let options = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
      ];
      let str = '';
      while (dec) {
        let rem = dec % 16;
        str = options[rem] + str;
        dec = Math.trunc(dec / 16);
      }
      return '0'.repeat(2 - str.length) + str;
    };
    console.log();
    return `#${decToHex(color_obj.r)}${decToHex(color_obj.g)}${decToHex(
      color_obj.b
    )}`;
  };

  const isDark = ({ r, g, b }) => Math.sqrt(r * r + g * g + b * b) <= 127.5;
  const toPercentage = (fl) => Math.trunc(fl * 100) + '%';

  const getNewColor = ({ col1, col2, strength }) => {
    let col1_obj = hexToColor(col1);
    let col2_obj = hexToColor(col2);
    let newColor_obj = {
      r: Math.trunc(col1_obj.r * (1 - strength) + col2_obj.r * strength),
      g: Math.trunc(col1_obj.g * (1 - strength) + col2_obj.g * strength),
      b: Math.trunc(col1_obj.b * (1 - strength) + col2_obj.b * strength),
    };
    let newColor_str = colorToHex(newColor_obj);
    return newColor_str;
  };

  const copyColor = () => {
    setIsCopied(true);
    copy(new_color);
    setTimeout(() => setIsCopied(false), 1000);
  };

  const [isCopied, setIsCopied] = useState(false);

  const { col1, col2, strength } = props;
  const new_color = getNewColor(props);
  return (
    <div
      className="item"
      style={{
        color: isDark(hexToColor(new_color)) ? 'white' : 'black',
        backgroundColor: new_color,
      }}
      className="item"
      onClick={copyColor}
    >
      <p>{toPercentage(strength)}</p>
      <p>{new_color}</p>
      <p className="copy">{isCopied ? 'COPIED TO CLIPBOARD' : ''}</p>
    </div>
  );
};

export default Color;
