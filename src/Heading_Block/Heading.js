import './style.scss';
import './editor.scss';
import {GLOBAL_FONTS} from '../Global_Fonts';
import { GLOBAL_ICONS} from '../Global_Icons';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	InspectorControls,
	RichText,
	MediaUpload
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	DateTimePicker,
	ColorPicker,
	CheckboxControl,
	TextControl,
	RangeControl,
	PanelRow,

} = wp.components;

const headingBlockIcon = (
	<svg width={800} height={800} viewBox="0 0 800 800" >
      <image
        width={800}
        height={800}
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAABmJLR0QA/wD/AP+gvaeTAAAA CXBIWXMAAC4jAAAuIwF4pT92AAAo+0lEQVR42u3de5RlWV0f8N8VQV3BR5iBAUdlIETA+ABhqgrE BwE0IaI8RIOKRkNAq8dhAioPI8pDHsNDHtOFEARiDDHyEDVPkwVRUKsKkKdAIggiI84wCgrKWhP1 5o/qgu6erupbdc/97XN++/NZ6870dFffs8+5d/bZ3/Pb+5zZfD4PAACADJ/VugEAAEA/BBAAACCN AAIAAKQRQAAAgDQCCAAAkEYAAQAA0gggAABAGgEEAABII4AAAABpBBAAACCNAAIAAKQRQAAAgDQC CAAAkEYAAQAA0gggAABAGgEEAABII4AAAABpBBAAACCNAAIAAKQRQAAAgDQCCAAAkEYAAQAA0ggg AABAGgEEAABII4AAAABpBBAAACCNAAIAAKQRQAAAgDQCCAAAkEYAAQAA0gggAABAGgEEAABII4AA AABpBBAAACCNAAIAAKQRQAAAgDQCCAAAkEYAAQAA0gggAABAGgEEAABII4AAAABpBBAAACCNAAIA AKQRQAAAgDQCCAAAkEYAAQAA0gggAABAGgEEAABII4AAAABpBBAAACCNAAIAAKQRQAAAgDQCCAAA kEYAAQAA0gggAABAGgEEAABII4AAAABpBBAAACCNAAIAAKQRQAAAgDQCCAAAkEYAAQAA0gggAABA GgEEAABII4AAAABpBBAAACCNAAIAAKQRQAAAgDQCCAAAkEYAAQAA0gggAABAGgEEAABII4AAAABp BBAAACCNAAIAAKQRQAAAgDQCCAAAkEYAAQAA0gggAABAGgEEAABII4AAAABpBBAAACCNAAIAAKQR QAAAgDQCCAAAkEYAAQAA0gggAABAGgEEAABII4AAAABpBBAAACCNAAIAAKQRQAAAgDQCCAAAkEYA AQAA0gggAABAGgEEAABII4AAAABpBBAAACCNAAIAAKQRQAAAgDQCCAAAkEYAAQAA0gggAABAGgEE AABII4AAAABpBBAAACCNAAIAAKQRQAAAgDQCCAAAkEYAAQAA0gggAABAGgEEAABII4AAAABpPrt1 A8ixvnPZTSLi/qded4uIL46Im7RuFwBQ3icj4sMR8daI+JWI+NWd9auub90o2pnN5/PWbWDF1ncu e0BEXBkRt2vdFgCge++LiMfsrF/1mtYNoQ0BpLD1nctuFBFPjYgfb90WAICzXBkRj99Zv+pvWzeE XKZgVTYXPgCA0dofozymdUPIpQJS1Pr2Zd8REa9s3Q4AgPN48M7GVa9q3QjyCCAFrW1fdpOIeH9E fEnrtgAAnMfVEXHb3Q0L03vhNrw1PTiEDwBgGi6OiO9s3QjyCCA13b91AwAAjuD+rRtAHgGkpktb NwAA4Aju2roB5BFAarpl6wYAABzBrVo3gDwCSE2f07oBAABHcJPWDSCP54CUNGvdAAAAOCcVEAAA II0AAgAApBFAAACANAIIAACQRgABAADSuAtWRfPWDQAAgHNTAQEAANIIIAAAQBoBBAAASCOAAAAA aQQQAAAgjQACAACkEUAAAIA0AggAAJDGgwg5rlnrBgBM2e7dXrDU31/73R9pvQv0yeOOWZoKCAAA kEYFpKC54gRAefp6YKpUQAAAgDQqIBWZnQlQn74emCgVEAAAII0AAgAApBFAAACANAIIAACQRgAB AADSCCAAAEAaAQQAAEgjgAAAAGkEEAAAII0AAgAApBFAAACANJ/dugGswLx1AwBYOX09MFECSEmz 1g0AYOX09cA0mYIFAACkEUAAAIA0AggAAJBGAAEAANJYhM6xvOnrnte6CXCgS3/n8k+vzn3T3Z8/ P+2/9/999v2DZmf9enbaz8wjYv6muz9/fvp7n/W+sf/nkEU/TAuX/vYjWzeBAgSQgoyC6Mmlv3P5 uX57ftafz8/+/YN+foHtzE/77/k5/nxwb7r781f23gBHYYzBEAQQYJJWOeAfmyH2VYgBYCwEEGBy egofQznOMRNaAFgFAQSYFOEjz1GOtbACwKIEEGAyhI/xWvSzEVQAEEAqskKMgoSPGg76HAUTmAhj DAbgOSDAqF36O5cLHx3wGQP0QwUEGnBXo/MzIO3P/mde/bsN0DsBpKTZ8m/BsWQOms/eVoVBm9BB hCAC42aMwfIEELo2/BNd23XMR9mXFk9QXqx9Tmx8xqW//UhP+wYoSAChpOGDRS2OD1Ox/10VRADq sAgdgNETmgHqEEAAmIRLf/uRgghAAQIIAJMiiABMmzUghc1mwz4taD63QBgYj9NDiDUiANMhgBTW 68NK7+rKKHTnoP/v3yyYAIyOAFLRfvIYsmAxj34TDTBZZwcTgQSWZCzAAAQQALqhUgLQngDCgqz/ AOo6VzARSgBWQwApaFUzsAB6suh6MkGFnhgPMAQBpLIhe4kp9ThTaisweXd944JB5R6CCkCE54AA QIpFgwpAdSogJe1PvhqqFDALa0AAAOMBhiCAlNZrJ9HrfgMAjJ8pWAAwEXd94xVx1zde0boZAEtR AeG85vPpVBScmIEenN7Xvfkez23dnAPbRntj+35AhABCMW++x3Od/ICu7Pd5LQea+l3gKASQig56 EMh8/1+zM3/uXGb7/5qf/2cBaC6jKiJoYDzAEASQHswXDB1n/Z29f01n+hUAewQFYMwEkMr2g4er FQAAjIQAUtiUFo8DANAHAYR6VHyAqvRvQAGeAwIAAKQRQAAAgDSmYFGOGQpAVfo3juoub7gi3vL1 z23dDDiDAFJSv4vP7/KGK1o3AQBGY/jw0e8Yg+EIIBSjYwQq08cB0yeAVKRGDwCsgjEGAxBACtI3 AACrYIzBENwFCwAASCOAAAAAaUzBoha1YaAyfRzFzGbzmM/dXKE3KiAAAEAaAQQAgHSzmZJerwQQ AAAgjQACAACkEUAAAIA07oJVkbtJAACrMOAYYx6n1oEYt3RHAKEYnRhQmT6OSnyfe2UKFgAAkEYA AQAA0piCRSlztxQHCtPHUcp8bx0I/VEBAQAA0gggAADk8yT0bgkgAABFfe1vPqp1E+AGrAEpyPUE ACAi4ve+8TmDvt+QY4z9m/Aat/RHBYQyXOUBABg/FZCKXEoAAFZhwDHGPGannoTeeqfIpgICAACk UQEpabb8WwAA3MCQY4z90odxS28EEArRgQHV6eeoxPe5VwIIdZhDClSnn6MS3+duWQMCAACkEUAA AEg38yT0bgkgAABAGgEEAABII4BQwtf+70e3bgIAAAtwF6yKTKkEAFbBk9AZgABCCfouoAf6Oqrx ne6TKVgAAEAaFRAm786vt/6DNt72j59zg99b2968WUR8W0R8Q0R8dUTcOiIuPO1H/jwiPhQR74qI N0TEf97d2PqT1vvSk7XtzQti7zP6xoj4qoi4JCJudtqPfDQiPhgRb4+I34qIX9/d2Pr42e9zp9c9 Kr/xLhdTie9ztwSQguYxa90E6M7a9uadI+KxEfHAOLxvvdmp150i4nsj4u/Wtjf/e0Rcubux9Zut 96Oyte3Nr4yIn4iIB0XEjQ/50Zufel0aEQ+LiOvXtjdfExFP3d3Yemfr/YCWhh1j7L2bcUt/BBAK 0HHRztr25k0j4mkRcSKO92X8rIi4b0Tcd21789URcbmKyLDWtjf/XkQ8NSIui+NNPb5JRPzziPiu te3Nn4uIx+xubH2iTd+jv6MS3+deCSAwMW+957NaN4FT1rc/dZuI+NXYm8YzhAdFxD3WtjcfvLux 9YbW+1fB2vbmJRHx2oj4mgHebhYRPxwR91zb3nzgzvqz3pO9P5X//7/z63+0dRNI5kno/bIIHeAY 1ndO3C721nAMFT72XRQR/2Nte/N+rfdx6ta2N28XEW+MYcLH6e4QEb+1vnNi6M8eoAsCCMARre+c uGlE/HpEXLyiTXxeRPzy2vbmpa33darWtje/KCL+a6zuM7owIv7n+s6JL229r3AYlSXGSACpaJ7w gr5txd5V8FX63Ij4lbXtzS9ovbMT9eKI+Icr3sZFEfHK9Z0TN2q9s3CQwaftrWI8YWzRHQGESXNl h2zrOye+PiIemrS5iyPi6a33eWrWtjf/aUQ8OGlz6xGx2XqfYYrc/apfAgjA0TwxeXsPP7WQmsU9 NXl7T1jfOfF5rXcaYCoEEKYtY7rZ2F40s75z4msj4p7Jm71RRDR44t00rW1v3iv2nrGS6cKI+IHW +z55rfvWqq8xm0IbWQkBBGBx39Nou9+9tr154+Xfpgvf12i73996xwGmQgABWNwDG233goj4ptY7 P3Zr25s3iohvb7X59Z0Tt259DACmQAApaZbwgr6s75y4JCIuadiEe7U+BhNw54j4wobbz56eBw2s YixhbNEbT0Jn4nRYpLlb4+3fvfUBmICva7z9e0TEy1sfhOnSn/fHZ94rAYRJs3aNRHdsvP2vbH0A JqD1MWq9/UnTn/fJ594nU7Aq6v2uGrAaq37w4Pn8/bXtzVu0Pggjd/vOtw83cKfX/diwb7iKsYSx RXcEEIDF3Kp1AyLilq0bMHKtj88Xre+c+NzWBwFg7ASQgnopgAx+VQcON4bqwxhC0JiN4TMaQxtg ZVYxnhjT2IIc1oAwXXorcn1O6wZEhKdtH67lHbD23SwiPtS6EZOkT++Pz7xbKiAAixnD4HYMIQgA liKAACxmDPeLVAEZvy9o3QCAsRNAAGA4zqsA56GjBAAA0liEXtIYZooAAPWsYoxh3NIbFZCKOrkP 79vu9czY67R6ewFU1LpvrfwaUPGxBTkEEAAAII0AAgAApBFAmLS33evKnClnY3oBVNS6b638gpER QAAAaGI+t7axRwIIk/e2e1/Z/OKSC1kAy2ndt1Z+wdgIIAAAQBoBhBLefu8rWzcBAIAFCCAAAEAa T0IvaG7CJwCwAoOPMWZhoUqHVEBKmthTVQdiGhYArNqw44nZGe9JLwQQiskIX61fABW17lvrvr7m fz2m9YcLZzAFi1qUcQGmSf+9Mm+/zzNaNwHOoAJCKTpZAJgODyLskwACAACkEUAoRxUEAGC8BBAA ACCNAAIAAKQRQCqaJ7xGzjQsAFiBVYwnJjK2YDgCCAAAkMZzQCjLxRSA6dBnQz9UQEryNO6IyJmK 1uIFUFHrvrXw66t/Y8gnoa9iPDGhsQWDEEAo6x3f/IzICWPZL4CKWvetdV9750MYDwEEAIA2PAm9 SwJIQWYBfcY7vvnprZsAAGUYWzAEAQQAAEjjLlgVuYwAAKyCMQYDUAEBAADSCCCUZx0IAIyUNehd MgWLPigZA4ybfrpPPvcuqYAAAABpVEBKUs8EAFZh6DHGfAXvydgJIHRC5wYwbvrpHs1mEXPTsLpj ChYAAE3MPQm9SwIIXXjHtzytdRMAAAhTsGpSyjwnhwVgvPTREzH0BzVbwXsyeiogAABAGgGEbrzz W562d5Vl6i+Ailr3rZVfYzb29rESpmAV5P9lAGAVjDEYggoIAACQRgApbDZznQIAgHERQAAAgDTW gJQ0O+DXOB4AY6V/ngafE8sTQCqaH/BrYOpetra9+bLWjQA6ZlzBAEzBAgAA0gggAABAGlOw6IvS McA46Z+hGyogAABAGgEEAABIYwpWYarZN+SYAIyT/hn6oQICAACkEUAAAIA0pmBVND/1lNLZqX+o a5/GE1wBxkn/PAlznxPLE0AK2s8bs4iYCx8AwEAMKxiCAFKZXuKGHBOAcdI/r8S77vszrZsAN2AN CAAAkEYAAQAA0gggxc1matoAAIyHAAIAAKQRQAAAgDTuglXRGffhDXcWAQCGYUzBAFRAAACANCog JZ16Sun8rP/GE1wBxkr/PBE+J5YngBSmSnpDjgnAOOmfoR+mYAEAFPT7/+wprZsA5ySAAAAAaQQQ AAAgjTUgBZ1+F97T/xsAYBnGFAxBAKnotAQyn8/0FgDAMIwpGIApWAAAQBoVkMo8Bf2GHA+m7URE vKJ1I0bsY60bwBL0z9ANAaSwuYc6QTV/vbux9fHWjRirte3N1k0AYAECSEmCx8EcG4Bx0j9Pg8+J 5VkDAgAApBFAAACK+f1vfXLrJsCBBBAAACCNNSAVuZMIALAKxhgMQAChK/pNgHHSP0M/BBD64gwH ME76Z+iGNSAAAEAaAQQAAEhjClZBqtgAwCoYYzAEFZCSZgmvqco4No49wNG17ltrvb7i158wwc+J XgggAADFvPt+T2rdBDiQAAIAAKSxBqQiEzQBgFUwxmAAAgh90XECjJP+GbphChYAAJBGAKEbX/Fr q7ojCAAAixJA6Ma7v80dQQAAWrMGhK6YYgwwTvpn6IcAQmc86AhgnPTP0AsBpCSdOACwCsYYLE8A qUgd+2CODcA46Z+nwefEACxCBwAA0qiAFOTiBAD06z3f/sSVvbcxBkNQAQEAANIIIAAAQBoBBAAA SCOAAAAAaQQQAAAgjbtgVeQWFQebe4ASwCjpn6fBGIMBCCAl6cQBgFUwxmB5pmABABRyx9f+dOsm wKFUQOiKyjHAOOmfh/Pe+/906ybAoVRAAACANAIIAACQRgChG3cwJxYAoDkBBAAASGMRekFzK/nO zXEBGC999CQYYzAEAYSOuHc5wHjpo6EXpmABAABpVEBKchUJAFgFYwyWpwICAACkEUAAAIA0AggA QBHvfcBPtW4CnJcAAgAApLEIvSL36L6B27/mia2bAMAhPF9iInxODEAFBAAASCOAAAAAaUzBohPu Ww4wbvpp6IUKCAAAkEYFpCRXkQCAVTDGYHkCSEFuUAEArIIxBkMQQCrSO9yQYwIwbvrpafA5MQBr QABgOH/TugH07favflLrJsB5CSAAi/nb1g2IiL9s3QDO65OtG0Df/s+DntC6CXBeAgjAYj7RugER 8XetGzByYzg+YwiqAKMmgAAs5lOtGxARH2/dgJH789YNiIiPtW4AwNhZhE55t3/1k8NtAxnAn0bE HUbQBg720Yi4sHEbrm19EKZLPw29EEAozw07GMhHWjcgIj7cugEj9+GIuGPD7V+3s37y+tYHYar0 1dAPU7AAFvPextv/492NLQucD9f6M3pP6wMAMAUqICUpY5/BZTWG8Y7G239X6wMwAa2PUevvyLTp qyfCGIPlCSAV6cRhFX638fZ/q/UBmIA3dr59WD1jDAZgChbAAnbWT14TEe9u2ITfaH0MJuA9EXFN o23PI+J1rQ8AwBQIIACLe1Wj7b5vd2Pr91rv/NjtbmzNI+KVjTb/+p31k+6ABbAAAQRgcb8YbSYg vLz1jk/ILzTa7sta7zj83+/4ydZNgIUIIAXNE17Qo531k38QEa9N3uxfRMTJ1vs+FbsbW2+K/LUY H4yIX2q975DB2IIhCCCU9uWvenLrJlDPEyLibxO399Tdja2Pt97piXlc8vYev7N+8m9a7zTAVAgg lLZXjp4Ve9HSzvrJd0XEc5I295bEbZWxu7H1xoh4adLm/svO+sn/2Hqfa2jdt1Z4wTS4DW9F6pif 9uWvfErrJlDTv4mIe0TE3Va4jWsj4kG7G1uurB/P5RGxHhH/aIXbeF9EPLT1jpbh3DUNPicGoAJS kqsssEo76yevj4hvj9U9+O66iLj37sbWH7Xe16na3dj6q4j4JxHx/hVt4v0RcZ+d9ZMfa72vkMvY guUJIADHsLN+8qMRcc8Y/gGB74mIr9/d2Hpn632cut2NrQ9HxDdGxFsHfuudiPiGnfWTH2y9jwBT JIAAHNPuxtZ1EXGfiHhSRCw7VWoee3e7Wt/d2Hpv632rYndj6+qI+LqIeF4sP3nk+oh4ckR8w+7G 1p+03jeAqbIGhNJMVWXVdje2ro+In1rb3vz3EfH4iHhIRHzuEd7i+oh4TUQ8ZXdj6/db709Fuxtb n4qIK9a2N18cET8ZEQ+KiBsf4S3+KvaeAfOs3Y2t97Xen6r019APAQRgAKcGpj+4tr15RUR8a0R8 U0TcKSIuiYibn/aj10XEhyLibbE3fevXdje2rCNIsLux9e6IeMja9uaFEXG/2Jue9VURceuIuODU j80j4qMR8YHYm7r1uoj4b7sbW59s3X6AKgQQgGOaz895zfYvI+IVp14LvpHnDCa7LvaeXL7408t9 RgCDEUCoTU0fYBr019ANAaQinfhp3NYPYBr015NgjMEA3AULAABIowJSkIsTAMAqGGMwBAGkJGVs AGAVjDFYnilYAABAGgEEAABII4AAAABprAGhNqvlAKZBfw3dEEAq0okDQFf+4Lt+ImdDxhgMQACh NP0kwDTor6EfAghl3e4/PTXcLhBgKvTX0AuL0AEAgDQCCAAAkMYUrJKUsQGAVTDGYHkqIJS0t/4D AICxUQGhJrdTAZgW/TZ0QwApaK4TBwBWwBiDIZiCBQAApBFAAACANKZgUZS7dABMi34beqECAgAA pBFAKOd2v/S01k0AAOAApmBRjjt0AEyPvhv6IYCUZB4tALAKxhgsTwCpyFUkAGAVjDEYgDUgAABA GgEEAGDC3v+Qx7VuAhyJAAIAAKQRQAAAgDQWoVOQO3QATI++G3ohgBTU/Q0quj8AABOk754EHxND MAWLUv7BK57eugkAABxCBaQilycAgFUwxmAAAkhJ5tECAKtgjMHyTMECAADSqIBQyiorw39x9S1G UXi+4Jkvbd0EgBW4ResGLO0LL75WeQAWoAICADBRf/jdj23dBDgyAQQAAEhjCha1zFW/AWjEOQgW ogICAACkUQGpaBRLpQGAcowxGIAKCGXc9j88o3UTACDNH37PY1o3AY5FAAEAANKYglWSRXAAwCoY Y7A8AaSgHqdnmn4FAKvX4xiD4ZmCBQAApFEBoQaXZABozbkIFqICAgAApFEBoYjVL4r7wouvtfIO GNQffvdjl/r7t33F01vvAqf7O9d1YRECSEUdloAzdnk2lz+AkdEvjUoXp98udpJVE9UBAIA0AgiT d5tfvLJ1EwAg1Qe+98dbNwGOTQABAADSWANSUmdzgrPmo3Z2WAE4oi7WRzgZsjwVEAAAII0AAgAA pBFAAACANNaAVNTFHNTTJc1HnXd3YIGx0y2NTAfrI3znGIAAUpC+AQDq+sBDf6zZto0xGIIAAgvr 4MoWMDH6JWB6BBBYkKs+wNjol4ApEkCYtNv8wjPzNuZCIwCHkQhhIe6CBQAwER/4vnbrP2AoKiAl 9XOpPvNiUz9HFYDj6KMA4mzI8gQQWFQfZxZgSvRLwAQJIBU5IQEAq2CMwQCsAWGyLslcgA4AwCBU QJiw7HmoLvsAcBjrI2ARAggszIkFGBv9EjA9AgjTlV2QcJ4H4DAK5bAQa0AAAIA0AggAAJDGFKyC 9ivAs6hbDb7k3z0rf6NVDyYwXfqlrnzw+3+0dRN85RiECkhF89neK04tW9j/7yFfjY2hEwaA7qxi TDGSsQV5VECYpBYVEFd9gLHRLwFTpAICAACkUQEprPKVsRb7pjgMwGEqn3dhSAJIZZXnU7bYt1n9 U8snrrmgdROgKxc886XLvkPrXTiSz7/oz1o3YbUqn3dhQAIILKybE0v9pAW0MOuoHx3cH/2LR7du AgzGGhAAACCNCggsSl0AYDn6USAEkJpOfxLh2b9XwK1f/uzWTQCAPhUaT9COKVi9MO0WACbJ+g+q UQEpaT9tzA/4fQCA4zCWYHkqIAAAQBoVkMqqztNstV8u+gBwmKrnXRiYCkhX9IwAALSlAlLQZ26C NTvwz6atTSliXuToAbRSvxetXyqv/xmSQQCBRc3rn1gAVko/CoQpWN3R9QMA0JIKSEWn6qMHXmia eP3UGnQAxmjip1c7SRoBBDibrAUArIwAwqR82cue07oJpd305h9r3QToyrJPuL71y5/dehdYsQ/9 wKNaNwEGJ4BUVrFM2nKf1AUAOEzF8y6sgABS0v5Ieb7AzwAALMr4geW5CxYAAJBGBQQWpbQOjI1+ CZggAaS0imXSlvvkTA/AYSqed2F4AkhF++Pk8/WDxtNH5MQCjI1+iWTGDgzAGhAAACCNAAIAAKQx BasgM7BWw/ECxka/RDbfOYYggFR2nl5idv4fGZUv+/mfbdsAU60BOMyUTqrQkClYAABAGhWQkvYu 1c8XuhQzncv6rS8szVo3AOBs+qVR6ePjmM64gfFSAWESvrT19CsAAAYhgHRvGtdr/vhf/uvWTQAA YACmYFX06dtgLVgmnUAG+dKff260L/tO4EAB0FDr81QCp0IGIIDAwjo4sQATo18CpscULAAAII0K SGWVyqRj2BcXGgE4zBjOVTABKiAAAEAaAQQAAEhjChYsSmkdGBv9EjBBKiAAAEAaFZCS9ldLH+XS mBXW5+NCIzA2+iXyGS+wPAGkoPmpM9KizyE8/e8AABzEeIEhCCClVbpKMYZ90esCcJgxnKtg/ASQ yiqNl8ewL0cpKQGk0C+NyhjOVTABAkhhlfrBMeyL0zwAhxnDuQqmwF2wmIQP/6tHtm4CAAADUAGB Rbm0BYyNfgmYIBUQAAAgjQACAACkEUAAAIA0AkhF8zjavOD5MV4NWIgOAI0dZ8ww4rEFbViEXtL+ DWMX+L957uayAMCijBtYngBSWcWrCS33SZ9bxl9/7AtaNwEiIuKCZ770nL//Zz/2g62bxnFUPO/C CgggpVUcMVfcJxoxVGCsjtDR6RPHxecBixBAYFGGq8DY6JeACRJAYEHO88DY6JeAKXIXLAAAII0A UtBR7mY3tTvlffjhlzfcOgD0zV14GYIAAgAApLEGpKJTlxEWesTHBC85tGqye5sAcJgJnlLtJE2o gPRsop3I1aZhAQBMlgpIZRMNGKPdNyUQAA5T+bwLAxJAStofKZ+vJzSiBgCOwtiB5QkgsChXtoCx 0S8BEySAlFb5KkXlfQNYlL5wXHwesAiL0AEAgDQqILCg+UL3NV69qx/xI62bUMU4PlBYQqWHs178 ohe0bgKQRAUEAABIowJS0f6ixNkCPwMAsCjjBwYggFRWuZOovG8APdKvQzdMwWKSrv4h6yAAAKZI AAEAANIIIAAAQBprQAqan1p9PjtkQu3cHUgBgCMyfmAIAkhh1dfzVd8/gJ7o06EfAkhp1a9SVN8/ gJ7o06EX1oAAAABpVEAq8iBCAGAVjB8YgAoIAACQRgWkssJXKb74hVe1bgIAQyp8zgLOpALCJP3J D1/WugkAAByDAAIAAKQRQAAAgDQCCAAAkEYAAQAA0rgLVkn7DwCZn+fPAQCOwhiC5QkgpVXvJKrv H0BP9OnQCwGkovM9Cd291gGA4zCGYAACSGXVO4nq+wfQE306dEMAKeiwAoj+HQA4LuMIhiCAFFa9 k6i+fwA90adDP9yGFwAASCOAAAAAaQQQAAAgjQACAACkEUAAAIA07oJVkfvwlnarrZOtmwAc00c2 Tyz19/3/T3PGEQxAACnpVPKYzw/+swp0gkBv9Hs0V2gcQTMCSGnVO4nq+wdwNv0eMH3WgAAAAGkE ECbpVie3WjcBAIBjEECYpI+c2GzdBAAAjkEAAQAA0gggAABAGgEEAABII4AAAABpPAekoHM9CN2z qwCAZRlPMAQBpKL5Gf8qa159BwHOot/rzy2v2oo/vWxEd370HWQApmABAIzUqMIHDEQFpKT9yVfz c/weAMBxGU+wPAGktLqdxC2vemHp/QM4N/0eMH2mYAEAAGkEEAAAII0AAgAApBFAAACANAIIAACQ RgABAADSuA1vRT08pbSHfQQ4m76P1nwHGYAKCAAAkEYAYXJu+YIXtm4CAADHJIAAAABpBBAAACCN ReglzVo3wP4BrIT+j9Z8B1meCggAAJBGBaSwedS8TuEOgECv9H9ABQJIQfMDfg0AsAzjCoZgChYA AJBGBaQyc7AAatH/AQWogFQ0j8+cpOYregEAK3fR83+udRPOtKpxhbFFVwQQAAAgjQDCpIzuShAA AEcigAAAAGkEEAAAII27YDEZpl8BUNU1l/9Q6yZAGgEEAGCFhAs4kwBS2ixq3deu4kNNAI5CPzgF 11z+iNZNgFETQEqaHfBrAGBZ11z+iLjo+S/qNGgYV7A8AQQA4JRFQ0Wf4QOGIYAwHZVmkwEch37w 2K55pMAAYyGAVFT0BDXFk8dFz3vRZNs+VRc970ULH+9FfvYo73eUNgLD0L8mKzrGIJcAAivkxJjv KMd8kZ9dxWd4lIAE3JC+FaZNAAEYqbMHWQIJPREyoC4BBGAiDhqQCSZUIHBAPwQQgIk7feB2C2Gk tKlPv79WyABCAClp6ico4PgOG+AJJ6yScNEHYwyGIIAAdOLsAaJAwrKEDuA4BBCATh00eBRMOJ2Q AQxNAAHgDNdaU9I9oQNYJQEEgANZU9IPoQPIIoAAcCxnVEqe++LWzenDfDbYW117xcNb7w3QKQGk pOFOUACL2B/MCiLjIWCwGsYYLE8Aqcg98oBGzjXoFUqGI1TQnDEGAxBAAFip3kOJ0ABwJgEEgHRZ g/JbPPfFAgDAyHxW6wYAwKoIHwDjI4AAAABpBBAAACCNAAIAAKQRQAAAgDQCCAAAkEYAAQAA0ggg AABAGgEEAABI40noFc1bNwAAKMkYgwGogAAAAGlUQAqax6x1EwCAgowxGIIKCAAAkEYAAQAA0ggg AABAGgEEAABIYxE6x3Lzn/23bsQHAMCRqYAAAABpBBAAACCNAAIAAKQRQAAAgDQCCAAAkMZdsCpy fyoAAEZKBQQAAEgjgAAAAGlMwWKEZq0bAI2YPwlAfQIIIyN80LNzff+FEgBqEUAARk0oAaAWAaSk 2Sci4vNbtwJYFZVCoJzrWzeAPBah1/SR1g0AADgCY5eOCCA1vaN1AwAAjuDNrRtAHgGkpte2bgAA wBG8tnUDyGMNSE2vjIinR8SXtG7IoiyphXGwugRo4OrYG7vQidl8buhX0c2f85IHR8Qvt27HonwN YXxm0giQ4zs/+qiHCSAdEUAKu/A5L3lFRDykdTsW4msI0yGYAMN55nWPetiPt24EuawBqWwer46I q1o3AyhmftoL4PhORsTjWjeCfCogHbjw2S95UOytCbld67YAAN17X0Q87rpHP+xVrRtCGwJIJy58 9ktuEhEPjogHRMRdIuLiiLhx63YBAOX9v9hbaP6WiPiViHjldY9+mAcPdkwAAQAA0lgDAgAApBFA AACANAIIAACQRgABAADSCCAAAEAaAQQAAEgjgAAAAGkEEAAAII0AAgAApBFAAACANAIIAACQRgAB AADSCCAAAEAaAQQAAEgjgAAAAGkEEAAAII0AAgAApBFAAACANAIIAACQRgABAADSCCAAAEAaAQQA AEgjgAAAAGkEEAAAII0AAgAApBFAAACANAIIAACQRgABAADSCCAAAEAaAQQAAEgjgAAAAGkEEAAA II0AAgAApBFAAACANAIIAACQRgABAADSCCAAAEAaAQQAAEgjgAAAAGkEEAAAII0AAgAApBFAAACA NAIIAACQRgABAADSCCAAAEAaAQQAAEgjgAAAAGkEEAAAII0AAgAApBFAAACANAIIAACQRgABAADS CCAAAEAaAQQAAEgjgAAAAGkEEAAAII0AAgAApBFAAACANAIIAACQRgABAADSCCAAAEAaAQQAAEgj gAAAAGkEEAAAII0AAgAApBFAAACANAIIAACQRgABAADSCCAAAEAaAQQAAEgjgAAAAGkEEAAAII0A AgAApBFAAACANAIIAACQRgABAADSCCAAAEAaAQQAAEgjgAAAAGkEEAAAII0AAgAApBFAAACANAII AACQRgABAADSCCAAAEAaAQQAAEgjgAAAAGkEEAAAII0AAgAApBFAAACANAIIAACQRgABAADSCCAA AEAaAQQAAEgjgAAAAGkEEAAAII0AAgAApBFAAACANAIIAACQRgABAADSCCAAAEAaAQQAAEgjgAAA AGkEEAAAII0AAgAApBFAAACANAIIAACQRgABAADSCCAAAEAaAQQAAEgjgAAAAGkEEAAAII0AAgAA pBFAAACANAIIAACQRgABAADSCCAAAEAaAQQAAEgjgAAAAGkEEAAAII0AAgAApBFAAACANAIIAACQ RgABAADSCCAAAEAaAQQAAEgjgAAAAGn+PwQrNaCq3lkjAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIw LTA2LTI5VDIwOjQxOjM1KzAwOjAw+sUHrQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNi0yOVQy MDo0MTozNiswMDowMLpwpYwAAAAASUVORK5CYII="
      />
    </svg>
);
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType( 'k2/heading-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Heading',
	icon: {
		src: headingBlockIcon,
	},
	category: 'k2-blocks',
	attributes: {
		headingType:{
			type:'string',
			default:'iconHeading'
		},
		headingTag: {
			type:'string',
			default:'h1'
		},
		headingText: {
			type:'string',
			default: 'K2 HEADING'
		},
		/*Text styling */
		textColor:{
			type:'string',
			default: 'black'
		},
		textFontFamily: {
			type: 'string',
			default: '"Montserrat",Sans-serif'
		},
		textSize: {
			type: 'number',
			default: 3
		},
		textAlignment: {
			type: 'string',
			default: 'center'
		},
		backGroundColor: {
			type:'string',
			default: 'transparent'
		},
		textFontWeight: {
			type: 'string',
			default: 'normal'
		},
		textFontStyle: {
			type: 'string',
			default: 'normal'
		},
		/*Border styling */
		borderStyle: {
			type:'string',
			default: 'under2'
		},
		lineColor:{
			type:'string',
			default: '#35C76B'
		},
		borderWidth:{
			type:'number',
			default: 5
		},
		/*icon type*/
		iconType:{
			type:'string',
			default: 'image'
		},
		iconClass:{
			type:'string',
			default: 'fa fa-rocket'
		},
		imageurl:{
			type:'string',
			default:'http://k2blocks.com/wp-content/uploads/2020/05/K2-Blocks-Logo-1.png'
		},
		/*icon styling*/
		iconSize:{
			type: 'number',
			default: 5
		},
		iconColor:{
			type:'string',
			default: 'black'
		},
		/*image styling*/
		imageheight:{
			type: 'number',
			default: 7
		},
		imagewidth:{
			type: 'number',
			default: 7
		}
	},

	edit: function(props) {

		/*Functions **************************/
		function onChangetextFontColor(value){
			props.setAttributes( {
				textColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'}
			);
		}

		function onChangeBackgroundColor(value){
			props.setAttributes( {
				backGroundColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'}
			);
		}

		function onChangeLineColor(value){
			props.setAttributes( {
				lineColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'}
			);
		}

		function onChangeiconColor(value){
			props.setAttributes( {
			iconColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'});
		}

		//helper for color popup
		function myFunction(value) {

			var oferts = document.querySelectorAll(".k2-hb-inspector-popuptext .components-color-picker__inputs-wrapper");
			for (var i=0; i<oferts.length; i++){
				oferts[i].style.display = 'none';
			}

			var ParentDiv = value.target.parentNode
			var PopupDiv = ParentDiv.getElementsByTagName('span')
			if (PopupDiv[1].hidden  === true){
				PopupDiv[1].hidden  = false
			} else if (PopupDiv[1].hidden  === false){
				PopupDiv[1].hidden  = true
			}
		}
		//helper for alignment icons
		function onChangeAlignmentIconChange(value) {

			if (value.target.tagName === 'SPAN'){
				var ParentDiv = value.target.parentNode
				var MainDiv = ParentDiv.parentNode
				var Spans = MainDiv.getElementsByTagName('div');
				for (var i = 0; i < Spans.length; i++) {
					if (Spans[i].getElementsByTagName('span')[0].className.includes('k2-ib-active')){
						Spans[i].getElementsByTagName('span')[0].className = Spans[i].getElementsByTagName('span')[0].className.replace('k2-ib-active','')
					}
				}
				value.target.className = value.target.className + ' k2-ib-active'

			}

		}

		//helper icon slector
		function onChangeIconActive(value) {

			if (value.target.tagName === 'SPAN') {

				var MainDiv = document.getElementById( "k2-ib-icon-list-wrapper-id" );
				var Spans = MainDiv.getElementsByTagName( 'span' );
				for (var i = 0; i < Spans.length; i++) {
					if (Spans[i].className.includes( 'k2-ib-active' )) {
						Spans[i].className = Spans[i].className.replace( 'k2-ib-active', '' )
					}
				}
				props.setAttributes( {
					iconClass: value.target.className
				} )
				console.log( value.target.className )
				value.target.className = value.target.className + ' k2-ib-active'
			}
		}

		function onImageSelect(value){
			props.setAttributes({imageurl:value.url})
			console.log(value.url)
		}

		/*Variables**************************/
		var iconStylingMenu = null;
		if(props.attributes.headingType == 'iconHeading' && props.attributes.iconType == 'icon'){
			iconStylingMenu = (
				<PanelBody title={'Icon Settings'}>
					<div className={'k2-ib-icon-list-wrapper'}>
						<div>
							<label><strong>Select Icon</strong></label>
						</div>
						<div id='k2-ib-icon-list-wrapper-id' className={'k2-ib-icon-list-sub-wrapper'}  onClickCapture={onChangeIconActive}>
						{GLOBAL_ICONS.map((value, index) => {
							return <span className={'fa '+value}></span>
						})}
						</div>
					</div>
					<RangeControl
						label={<strong>Icon Size</strong>}
						value={ props.attributes.iconSize }
						onChange={ (value)=>{props.setAttributes({iconSize:value})} }
						min={ 0.1 }
						max={ 10 }
						step ={0.1}
					/>
					<PanelRow>
						<p><strong>Icon color</strong></p>
						<div className="k2-hb-inspector-popup">
							<span style={{backgroundColor:props.attributes.iconColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
								</span>
									<span className="k2-hb-inspector-popuptext" id="myPopup" hidden={ true }>

								<div>
									<ColorPicker
										color={ props.attributes.textColor }
										onChangeComplete={ onChangeiconColor }
									/>
									<TextControl
										onChange={ ( value ) => {
											props.setAttributes( { iconColor: value } )
										} }
										value={ props.attributes.iconColor }
									/>
								</div>

							</span>
						</div>
					</PanelRow>
				</PanelBody>
			)
		}

		var imageStylingMenu = null;
		if(props.attributes.headingType == 'iconHeading' && props.attributes.iconType == 'image'){
			imageStylingMenu = (
				<PanelBody title={'Picture Settings'}>
					{/** pic upload pic size*/}
					<MediaUpload
						onSelect = {onImageSelect}
						type = {'images'}
						value = {props.attributes.imageurl}
						render={ ({open}) => {
							return (
								<div style={{backgroundImage: 'url("' +props.attributes.imageurl + '")'}} className={'k2-hb-image-select-control'}>
										<i className="fa fa-plus-circle" onClick={open}></i>
								</div>
							)
						}}
					/>
					<RangeControl
						label= "Image Width"
						value={ props.attributes.imagewidth }
						onChange={ (value)=>{props.setAttributes({imagewidth:value})} }
						min={ 1 }
						max={ 10 }
						step ={0.1}
					/>
					<RangeControl
						label= "Image height"
						value={ props.attributes.imageheight }
						onChange={ (value)=>{props.setAttributes({imageheight:value})} }
						min={ 1 }
						max={ 10 }
						step ={0.1}
					/>
				</PanelBody>
			)
		}

		const tagOptions = [
			{ label: 'p', value: 'p' },
			{ label: 'h1', value: 'h1'},
			{ label: 'h2', value: 'h2'},
			{ label: 'h3', value: 'h3'},
			{ label: 'h4', value: 'h4'},
			{ label: 'h5', value: 'h5'},
			{ label: 'h6', value: 'h6'},
		];

		var iconParentStyle = {
			justifyContent: props.attributes.textAlignment,
			backgroundColor: props.attributes.backGroundColor
		};
		var imageStyling = {
			minHeight: props.attributes.imageheight + 'em',
			width: props.attributes.imagewidth + 'em'
		}

		var iconStruct = null;
		if(props.attributes.headingType == 'iconHeading'){
			if(props.attributes.iconType == 'icon'){
				iconStruct = (
					<div style = {iconParentStyle} className='k2-hb-icon-container'>
						<i style={{color:props.attributes.iconColor, fontSize:props.attributes.iconSize+"em"}} className={props.attributes.iconClass}></i>
					</div>
				)
			}
			else if (props.attributes.iconType == 'image'){
				iconStruct = (
					<div style = {iconParentStyle} className='k2-hb-icon-container'>
						<img src={props.attributes.imageurl} style={imageStyling}></img>
					</div>
				)
			}
		}

		var textStyling = {
			fontSize: props.attributes.textSize+'em',
			color: props.attributes.textColor,
			fontFamily: props.attributes.textFontFamily,
			fontWeight: props.attributes.textFontWeight,
			fontStyle: props.attributes.textFontStyle,
			borderWidth: props.attributes.borderWidth+"px"
		}

		var borderClass = "";
		var parentStyle = {justifyContent: props.attributes.textAlignment,
			backgroundColor: props.attributes.backGroundColor
		};
		if(props.attributes.borderStyle == 'left'){
			borderClass = " k2-hb-border-left";
			textStyling.borderColor = props.attributes.lineColor;
		}
		else if (props.attributes.borderStyle == 'top'){
			borderClass = " k2-hb-border-top";
		}
		else if (props.attributes.borderStyle == 'under1'){
			borderClass = " k2-hb-border-under1";
			parentStyle.borderColor = props.attributes.lineColor;
		}
		else if (props.attributes.borderStyle == 'under2'){
			borderClass = " k2-hb-border-under2";
			textStyling.borderColor = props.attributes.lineColor;
			parentStyle.borderBottom = "1px solid #9E9E9E";
		}

		var lineColor = null;
		var lineWidth = null;
		if(props.attributes.borderStyle == 'left' || props.attributes.borderStyle == 'under1' || props.attributes.borderStyle == 'under2' ){
			lineColor = (<PanelRow>
				<p><strong>Line color</strong></p>
				<div className="k2-hb-inspector-popup">
					<span style={{backgroundColor:props.attributes.titleFontColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
						</span>
							<span className="k2-hb-inspector-popuptext" id="myPopup" hidden={ true }>

						<div>
							<ColorPicker
								color={ props.attributes.textColor }
								onChangeComplete={ onChangeLineColor }
							/>
							<TextControl
								onChange={ ( value ) => {
									props.setAttributes( { lineColor: value } )
								} }
								value={ props.attributes.lineColor }
							/>
						</div>

					</span>
				</div>
			</PanelRow>)
			lineWidth = (
				<RangeControl
					label= "Line thickness"
					value={ props.attributes.borderWidth }
					onChange={ (value)=>{props.setAttributes({borderWidth:value})} }
					min={ 1 }
					max={ 20 }
					step ={1}
				/>
			)
		}

		var iconTypeSelector = null;
		if(props.attributes.headingType == 'iconHeading'){
			iconTypeSelector = (
				<SelectControl
						label="Icon Type"
						value={props.attributes.iconType}
						options={[
							{ label: 'Icon', value: 'icon' },
							{ label: 'Image', value: 'image'}
						]}
						onChange={(value)=>{
							props.setAttributes({iconType:value})
						}}
					/>
			)
		}

		return ([
			<InspectorControls>
				<PanelBody title={'General'}>
					<SelectControl
						label="Type"
						value={props.attributes.headingType}
						options={[
							{ label: 'Classic', value: 'classic' },
							{ label: 'Icon Heading', value: 'iconHeading'}
						]}
						onChange={(value)=>{
							props.setAttributes({headingType:value})
						}}
					/>
					{iconTypeSelector}
					<SelectControl
						label="Tag"
						value={props.attributes.headingTag}
						options={tagOptions}
						onChange={(value)=>{
							props.setAttributes({headingTag:value})
						}}
					/>
				</PanelBody>
				<PanelBody title={'Text Styling'}>
					<RangeControl
						label= "Font Size"
						value={ props.attributes.textSize }
						onChange={ (value)=>{props.setAttributes({textSize:value})} }
						min={ 1 }
						max={ 10 }
						step ={0.1}
					/>
					<PanelRow>
						<p><strong>Title color</strong></p>
						<div className="k2-hb-inspector-popup">
							<span style={{backgroundColor:props.attributes.titleFontColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
								</span>
									<span className="k2-hb-inspector-popuptext" id="myPopup" hidden={ true }>

								<div>
									<ColorPicker
										color={ props.attributes.textColor }
										onChangeComplete={ onChangetextFontColor }
									/>
									<TextControl
										onChange={ ( value ) => {
											props.setAttributes( { textColor: value } )
										} }
										value={ props.attributes.textColor }
									/>
								</div>

							</span>
						</div>
					</PanelRow>
					<PanelRow>
						<p><strong>Background color</strong></p>
						<div className="k2-hb-inspector-popup">
							<span style={{backgroundColor:props.attributes.backGroundColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
								</span>
									<span className="k2-hb-inspector-popuptext" id="myPopup" hidden={ true }>

								<div>
									<ColorPicker
										color={ props.attributes.textColor }
										onChangeComplete={ onChangeBackgroundColor }
									/>
									<TextControl
										onChange={ ( value ) => {
											props.setAttributes( { backGroundColor: value } )
										} }
										value={ props.attributes.backGroundColor }
									/>
								</div>

							</span>
						</div>
					</PanelRow>
					<SelectControl
						label="Heading Font"
						value={props.attributes.textFontFamily}
						options={GLOBAL_FONTS}
						onChange={(value)=>{props.setAttributes({textFontFamily:value})}}
					/>
					<SelectControl
						label="Weight"
						value={ props.attributes.textFontWeight }
						options={ [
							{ label: 'normal'},
							{ label: '100'},
							{ label: '200'},
							{ label: '300'},
							{ label: '400'},
							{ label: '500'},
							{ label: '600'},
						] }
						onChange={ (value)=>{props.setAttributes({textFontWeight:value})}}
					/>
					<SelectControl
						label="Style"
						value={ props.attributes.textFontStyle }
						options={
							[
								{ label: 'Normal', value: 'Normal' },
								{ label: 'oblique', value: 'oblique' },
								{ label: 'italic', value: 'italic' },
							]
						}
						onChange={ (value)=>{props.setAttributes({textFontStyle:value})}}
					/>
					<PanelRow>
						<div style={{paddingBottom: '2%'}}>
							<label><strong>Alignment</strong></label>
						</div>
						<div id = {'AlignmentIconsParent'} className={'k2-hb-inspector-control-alignment'} onClick={onChangeAlignmentIconChange}>

							<div className={'k2-hb-inspector-control-alignment-single'}  onClick={() => {props.setAttributes({textAlignment:'flex-start'})}}>
								<span className="fa fa-align-left k2-hb-alignment-icon-style" ></span>
							</div>
							<div className={'k2-hb-inspector-control-alignment-single'} onClick={() => {props.setAttributes({textAlignment:'center'})}}>
								<span className="fa fa-align-center k2-hb-alignment-icon-style k2-hb-active"></span>
							</div>
							<div className={'k2-hb-inspector-control-alignment-single'} onClick={() => {props.setAttributes({textAlignment:'flex-end'})}}>
								<span className="fa fa-align-right k2-hb-alignment-icon-style"></span>
							</div>
						</div>
					</PanelRow>
					<SelectControl
						label="Line style"
						value={props.attributes.borderStyle}
						options={[
							{ label: 'None', value: 'none'},
							{ label: 'Left ', value: 'left' },
							{ label: 'Top hat', value: 'top'},
							{ label: 'Underline', value: 'under1'},
							{ label: 'Double Underline', value: 'under2'},
						]}
						onChange={(value)=>{
							props.setAttributes({borderStyle:value})
						}}
					/>
					{lineColor}
					{lineWidth}
				</PanelBody>
				{iconStylingMenu}
				{imageStylingMenu}



			</InspectorControls>
			,
			<div className={'k2-hb-parent-container'}>
				{iconStruct}
				<div className={'k2-hb-text-container'+borderClass} style={parentStyle}>
					<RichText
						tagName = {props.attributes.headingTag} // The tag here is the element output and editable in the admin
						value={ props.attributes.headingText } // Any existing content, either from the database or an attribute default
						className = {'k2-hb-text'+borderClass}
						style = {textStyling}
						formattingControls={ [ 'bold', 'italic', 'link', 'text-color', 'text-highlight'] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ (value)=>{props.setAttributes({headingText:value})} } // Store updated content as a block attribute
						placeholder={ "K2 HEADING" } // Display this text before any content has been added by the user
					/>
				</div>
			</div>
		])
		}
	,
	save: function(props) {
		var textStyling = {
			fontSize: props.attributes.textSize+'em',
			color: props.attributes.textColor,
			fontFamily: props.attributes.textFontFamily,
			fontWeight: props.attributes.textFontWeight,
			fontStyle: props.attributes.textFontStyle,
			borderWidth: props.attributes.borderWidth+"px"
		}

		var borderClass = "";
		var parentStyle = {justifyContent: props.attributes.textAlignment,
			backgroundColor: props.attributes.backGroundColor
		};
		if(props.attributes.borderStyle == 'left'){
			borderClass = " k2-hb-border-left";
			textStyling.borderColor = props.attributes.lineColor;
		}
		else if (props.attributes.borderStyle == 'top'){
			borderClass = " k2-hb-border-top";
		}
		else if (props.attributes.borderStyle == 'under1'){
			borderClass = " k2-hb-border-under1";
			parentStyle.borderColor = props.attributes.lineColor;
		}
		else if (props.attributes.borderStyle == 'under2'){
			borderClass = " k2-hb-border-under2";
			textStyling.borderColor = props.attributes.lineColor;
			parentStyle.borderBottom = "1px solid #9E9E9E";
		}

		var imageStyling = {
			minHeight: props.attributes.imageheight + 'em',
			width: props.attributes.imagewidth + 'em'
		}
		var iconParentStyle = {
			justifyContent: props.attributes.textAlignment,
			backgroundColor: props.attributes.backGroundColor
		};
		var iconStruct = null;
		if(props.attributes.headingType == 'iconHeading'){
			if(props.attributes.iconType == 'icon'){
				iconStruct = (
					<div style = {iconParentStyle} className='k2-hb-icon-container'>
						<i style={{color:props.attributes.iconColor, fontSize:props.attributes.iconSize+"em"}} className={props.attributes.iconClass}></i>
					</div>
				)
			}
			else if (props.attributes.iconType == 'image'){
				iconStruct = (
					<div style = {iconParentStyle} className='k2-hb-icon-container'>
						<img src={props.attributes.imageurl} style={imageStyling}></img>
					</div>
				)
			}
		}
		return (
			<div className={'k2-hb-parent-container'}>
				{iconStruct}
				<div className={'k2-hb-text-container'+borderClass} style={parentStyle}>
					<RichText.Content
						tagName={props.attributes.headingTag} // The tag here is the element output and editable in the admin
						value={ props.attributes.headingText } // Any existing content, either from the database or an attribute default
						className = {'k2-hb-text'+borderClass}
						style = {textStyling}
					/>
				</div>
			</div>
	  );
	},
})
