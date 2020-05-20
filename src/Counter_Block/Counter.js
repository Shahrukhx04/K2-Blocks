import './style.scss';
import './editor.scss';
import {GLOBAL_FONTS} from '../Global_Fonts';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
//stuff
const {
	InspectorControls,
	ColorPalette,
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	DateTimePicker,
	TextControl,
	RangeControl,
	ColorPicker,
	PanelRow
} = wp.components;

const counterBlockIcon =(
    <svg width={800} height={800} viewBox="0 0 800 800">
      <image
        width={800}
        height={800}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAABmJLR0QA/wD/AP+gvaeTAAAA CXBIWXMAAC4jAAAuIwF4pT92AAA0PElEQVR42u3debikV10n8O9lDQ+QSCXYISQhQAz7ThYRBAFB EFmURRkdxcIREUIkWMjosAiyFIiAMYimxmUEBURAGUSGERQiCWGRBCRsAYasJCkDCaCBpOaPe5t0 On2771J1zlvn/Xye532S7r5d9Xurqk+d73uWd2U2mwUAAKCE69UuAAAA6A8BBAAAKEYAAQAAihFA AACAYgQQAACgGAEEAAAoRgABAACKEUAAAIBiBBAAAKAYAQQAAChGAAEAAIoRQAAAgGIEEAAAoBgB BAAAKEYAAQAAihFAAACAYgQQAACgGAEEAAAoRgABAACKEUAAAIBiBBAAAKAYAQQAAChGAAEAAIoR QAAAgGIEEAAAoBgBBAAAKEYAAQAAihFAAACAYgQQAACgGAEEAAAoRgABAACKEUAAAIBiBBAAAKAY AQQAAChGAAEAAIoRQAAAgGIEEAAAoBgBBAAAKEYAAQAAihFAAACAYgQQAACgGAEEAAAoRgABAACK EUAAAIBiBBAAAKAYAQQAAChGAAEAAIoRQAAAgGIEEAAAoBgBBAAAKEYAAQAAihFAAACAYgQQAACg GAEEAAAoRgABAACKEUAAAIBiBBAAAKAYAQQAAChGAAEAAIoRQAAAgGIEEAAAoBgBBAAAKEYAAQAA ihFAAACAYgQQAACgGAEEAAAoRgABAACKEUAAAIBiBBAAAKAYAQQAAChGAAEAAIoRQAAAgGIEEAAA oBgBBAAAKEYAAQAAihFAAACAYgQQAACgGAEEAAAoRgABAACKEUAAAIBiBBAAAKAYAQQAAChGAAEA AIoRQAAAgGIEEAAAoBgBBAAAKEYAAQAAihFAAACAYgQQAACgGAEEAAAoRgABAACKEUAAAIBiBBAA AKAYAQQAAChGAAEAAIoRQAAAgGIEEAAAoBgBBAAAKEYAAQAAihFAAACAYgQQAACgGAEEAAAoRgAB AACKEUAAAIBiBBAAAKAYAQQAAChGAAEAAIoRQAAAgGIEEAAAoBgBBAAAKEYAAQAAihFAAACAYgQQ AACgmBvULoAyjj39GTdK8ti14weTHJLkRrXrAgCad0WSc5N8Isnbk7zz9GNPurJ2UdSzMpvNatfA gh17+jMel2Sc5MjatQAAvfeFJM89/diT/qZ2IdQhgDTs2NOfcf0kL00yql0LAMBuxkn+++nHnnRV 7UIoyxSsls2EDwCgs3b2UZ5buxDKMgLSqGNPe8bjk7y1dh0AAPvwhNOPO+mvaxdBOQJIg4457Rk3 SvLFJIfWrgUAYB/OS3K7jxxnYXpf2Ia3TU+I8AEALIdbJ3li7SIoRwBp02NrFwAAsAmPrV0A5Qgg bTq6dgEAAJtw39oFUI4A0qaDaxcAALAJt6pdAOUIIG26ce0CAAA24Ua1C6Ac9wFp0krtAgAAYI+M gAAAAMUIIAAAQDECCAAAUIwAAgAAFCOAAAAAxdgFq0Wz2gUAAMCeGQEBAACKEUAAAIBiBBAAAKAY AQQAAChGAAEAAIoRQAAAgGIEEAAAoBgBBAAAKMaNCNmqldoFACyzj/zg72/r7x/z4WfWPgX6ye2O 2TYjIAAAQDFGQBo0MzgB0DxtPbCsjIAAAADFGAFpkdmZAO3T1gNLyggIAABQjAACAAAUI4AAAADF CCAAAEAxAggAAFCMAAIAABQjgAAAAMUIIAAAQDECCAAAUIwAAgAAFCOAAAAAxdygdgEswKx2AQAs nLYeWFICSJNWahcAwMJp64HlZAoWAABQjAACAAAUI4AAAADFCCAAAEAxFqGzJWf80GtrlwDrOvpf jv/e6twz7ve62S6/3vnf3fcPWtnt/1d2+ZlZktkZ93vdbNfH3u1xs/PPoRTtMDUcfeqzapdAAwSQ BukF0SdH/8vxe/rt2W5/Ptv999f7+Q08z2yXX8/28Odzd8b9XrewxwbYDH0M5kEAAZbSIjv8XTOP cxViAOgKAQRYOn0KH/OylddMaAFgEQQQYKkIH+Vs5rUWVgDYKAEEWBrCR3dt9L0RVAAQQFpkhRgN Ej7asN77KJjAktDHYA7cBwTotKP/5Xjhowe8xwD9YQQEKrCr0b7pkPbPzve89c82QN8JIE1a2f5D sCUlO827P1cLnTahg0QQgW7Tx2D7BBB6bf53dK3XMG/mXGrcQXlj9fli4xpHn/osd/sGaJAAQpPm Hyza4vVhWez8rAoiAO2wCB2AzhOaAdohgACwFI4+9VmCCEADBBAAloogArDcrAFp2MrKfO8WNJtZ IAx0x64hxBoRgOUhgDSsrzcrva8ro9A76/27/6hgAtA5AkiLdiaPeQ5YzNLfRAMsrd2DiUAC26Qv wBwIIAD0hpESgPoEEDbI+g+gXXsKJkIJwGIIIA1a1AwsgD7Z6HoyQYU+0R9gHgSQls2zlVimFmeZ agWW3n0/tMGgcn9BBSBxHxAAKGKjQQWgdUZAmrRz8tW8hgJWYg0IAKA/wDwIIE3rayPR1/MGAOg+ U7AAYEnc90Mn5L4fOqF2GQDbYgSEfZrNlmdEwRcz0Ae7tnUfvf9rapezbm3U17XPByQCCI356P1f 48sP6JWdbV7NjqZ2F9gMAaRF690IZLbzPyvX/rk9Wdn5n9m+fxaA6kqMigga6A8wDwJIH8w2GDp2 +zur/1me6VcArBIUgC4TQFq2M3i4WgEAQEcIIA1bpsXjAAD0gwBCe4z4AK3SvgENcB8QAACgGAEE AAAoxhQsmmOGAtAq7RubdZ8PnpCPPeA1tcuAaxFAmtTfxef3+eAJtUsAgM6Yf/jobx+D+RFAaIyG EWiZNg5YfgJIi4zRAwCLoI/BHAggDdI2AACLoI/BPNgFCwAAKEYAAQAAijEFi7YYGwZapo2jMSsr s8xmNlfoGyMgAABAMQIIAADFrawY0usrAQQAAChGAAEAAIoRQAAAgGLsgtUiu0kAAIswxz7GLGvr QPRbekcAoTEaMaBl2jha4vPcV6ZgAQAAxQggAABAMaZg0ZSZLcWBhmnjaMpsdR0I/WMEBAAAKEYA AQCgPHdC7y0BBACgUff+p2fXLgGuwxqQBrmeAAAkyccf+Oq5Pt48+xg7N+HVb+kfIyA0w1UeAIDu MwLSIpcSAIBFmGMfY5aVtTuh1z4pSjMCAgAAFGMEpEkr238IAIDrmGcfY+fQh35L3wggNEQDBrRO O0dLfJ77SgChHeaQAq3TztESn+fesgYEAAAoRgABAKC4FXdC7y0BBAAAKEYAAQAAihFAaMK9P3Bi 7RIAANgAu2C1yJRKAGAR3AmdORBAaIK2C+gDbR2t8ZnuJ1OwAACAYoyAsPTu9X7rP4CecLmYlvg8 95YA0qBZVmqXAAA0aL59jNVH02/pHwGEBmi4gL7Q3tESn+e+sgYEAIDi3Am9vwQQAACgGAEEAKBR 93r/c2qXANdhDUiLjGgCAEk+8SOvmu8DzruPsbKAx6TzjICw1FzZAYDlZPer/hJAAACAYkzBYrkZ tgX6RJtHS3yee8sICAAAUIwAAgAAFGMKVpMs6gIAFmGefYydc7D0W/pGAGHJabSAPtHm0RKf574S QFhq1q8BfaLNozU+0/1kDUiLZgUOAKDz7vmPvz7fB1xEX0LfoncEEAAAoBhTsBrUl4sIc7+qAwDs 1bz7GCsLeEy6TwBheWmxgL7R7tESn+feMgULAAAoRgABAACKEUAAAIBiBBAAAKAYi9Cb5M6iAMAi LKKPod/SNwJIi3qyq8S/PuSVuef/HdUuA6AgHTUqW0Qfoyf9Fq5hChYAAFCMAAIAABRjChZL7V8f Ms4932caFtATpqoADTACAgBAFbOZdU19ZASEpfevDx3nHkZBgB4wAAK0wAgIAABQjABCEz750HHt EgAA2AABBAAAKMYakAbNTBIGABZg7n2MlVjc1ENGQJq0UuDoHtOwAGDR5tufWLnWY9IXRkBojAYM aJk2js27x/uem08+9BW1y4DvEUBoi2FcoGXaOLbgkz8qfNAtpmDRFI0sACwPNyLsJwEEAAAoRgCh OUZBAAC6SwABAACKEUAAAIBiBJAWzQocHWcaFgAswCL6E0vSt2B+BBAAAKAY9wGhWS6mAK3RrgEt EECaZE/tJL6pgfZo19iCu7/3uTnzYfOamjzvPsZsAY9J1wkgNOvMh70id3/vb9QuA2COdNTYvDMf 9vLaJcC1WAMCAEAd7oTeSwJIg2yCdQ1XfQBgfvQtmAcBBAAAKMYakBa5jAAALII+BnNgBAQAAChG AKF51oEAQEdZg95LpmDRD4aMgRZoy2iNz3QvGQEBAACKMQLSJOOZAMAiuBM62yeA0BMaN6AF2jLa srKSzEzD6h1TsAAAqGLmTui9JIDQC2c+/GW1SwAAIKZgtclQ5h55WYBlpx2junl/CFcW8Jh0nhEQ AACgGCMg9MZZD39Z7vae59UuA2DrXCmmNT7TvSSANMi/ZQBgEfQxmAdTsAAAgGIEkIatrLhOAQBA twggAABAMdaANGllnf/H6wEsN20YtfkMsn0CSItm6/w/AMB26FcwB6ZgAQAAxQggAABAMaZg0S+G joFlpg0DGmAEBAAAKMYICFDUpx75si39vcF4ckiSByW5R5K7JDk0ya2S3CLJDWufV8d8O8klSS5M ck6Szyb5SJLTpqPhpbWL67OVbO3z34q7vvt5tUsAOkAAaZiR+uvymiyXwXiyI8nPJ/nZJHerXc8S uUmSw9aOo3f5/asH48mHk/xlkv81HQ2/UbtQ+kUbDCQCCNBBg/Fk/yTPT/KrSfarXU9Drpfkh9aO VwzGk1cledV0NLyidmEA9Ic1IECnDMaTH07yqSQnRvhYpJsmeUGSTwzGk2NrFwNAfwggLZqtrB5Z O2YLOJbWiqP6sb7BePLEJO/L6tQhyjgyyfsH48mjaxdCH9Ruf/p6zNEi+hRL37dgswSQBs1yzTzb 2eyaX8/zgHkbjCcPSfIXsaC8hpskefNgPLlf7UKAbltEn0Lfon8EkJb513xdi2w5HVv+hhmMJ7dO 8pYIHzXtl+SNg/HkZrULoWG1258eHp96xO/UftfhOgQQoAtOSTKoXQQ5IslzahcBQNsEEKCqwXjy qCQ/VrsOvudZg/HE4n8AFkYAadzKinlYdNdgPFlJen5ntu75viQ/XrsIANolgAA1PSLJXWsXwXX8 aO0CAGiXAALU9PTaBbBHx9QuAIB2uRN6i3bOulqJve3orMF4cnCs/eiq29UuAOgofQrmwAgIUMtP Jbl+7SLYowPW1ucAwNwZAWnSWr9httuvcafVbrHQudsOSHJZ7SJojDa4Ad5Dtk8AaZhR0uvymnTD 2javD65dB3v1rdoF0B5tMJCYggXUcd8kN65dBOv61nQ0vLJ2EcD2fPrHX1K7BNgjAQSo4QG1C2Cv Pl+7AADaJYAANdy7dgHs1b/ULgCAdlkD0qBdd+Hd9dfQIfeoXQB79a7aBQDdpE/BPAggLdolgcxm K1oLOmUwntwsyZG162BdX03yD7WLADpKn4I5MAULKO0usY9jl71kOhpeVbsIANplBKRl7oJ+XV6P Lrhb7QJY1weTnFK7CBqmDQZiBKRpMzd8opvuXrsA9ujcJD89HQ2vrl0IAG0zAtIkwWN9XpsOEEC6 57wkD52OhufXLoTWaYOXn/eQ7TMCApQmgHTLqUmOm46Gn61dCAD9YAQEKObCz9z21kluUbsOkiSX JnlBkjdMR8Pv1i5mmRxz2tNrrmR47UeOO/mE2q8B3ffpR724dgmwLgEEKMnoR32nJvlfSf58Ohp+ u3YxAPSPANIiu4zQXXbAKufiteOcJGcn+UiSD05HwwtrFwYsMX0M5kAAoVe0m9XVCiDvSvJztU++ gO9OR8MrahcB69EGA4kAQt/49qut1hSsj01Hw8tqnzz0njYYiF2wgEIuOvu2N0xyp0pP/8na5w8A rBJAgFLumOSGlZ77zNonDwCsMgWrQUa46aha6z+uyOpCbAC2SR+DeTAC0qSVAseyKvHaONb5zNQK IGdNR0PfmdAJtduh/hx3/rvnL+F7SF8IIEAptRagW/8B9M6//cRv1y4B1iWAAKXUCiDWfwBAh1gD 0iKTTeiYi84+4vuSHFrp6Y2AAMyLPgZzIIDQLxrOWmqNfiTJWbVPHlijDQZiChZQRq0Acs50NLy8 9skDANcQQOiNO//tonYEYQNq7YBl/QcAdIwAQm/826PtCFJRrQBi/QcAdIw1IPSK6cflfe2zR6xE AAGiDQZWCSD0jBsdVXBEkptVem5TsKBTtMGAANIoDTydco9Kz3tFknNqnzxAW/Qx2D4BpEXGuNfn tamh1vSrs6ajoXccusS/yOXnPWQOLEIHFs36DwDge4yANMjFCTqm1j1ArP8Aeukzj3nRwh5bH4N5 MAICLMzXPnebmyT5gUpPbwQEADpIAAEW6c6p186cVfvkAYDrEkCARaq1/uOc6Wh4ee2TBwCuSwAB FqnWFrzWfwBARwkgwCLZAQsAuBa7YLXIFhXrm7mBUmG1dsASQKCLtMHLTx+DORBAmqSBp76vff7w HUluWenpTcECWAh9DLbPFCxgUWpNv7oiyTm1Tx6glju944W1S4C9MgJCrxg5LqrW9KuzpqOhtxo6 yD/MMs5+7AtrlwB7ZQQEWBTrPwCA6zACAixKrSlYc1//MRhPjkhyzyR3SXJYktskOTTJQUlukmT/ XHti9H8k+XqSaZKLk3w1yZezOjXs00k+PR0Nr6j0+gBAVQIIvXFHc2KLufjzh18/q531GrY1AjIY T/ZLclySByV5YJJ7JTlgkw+z39qxI8md1nmezyU5de34v9PR8MuVXi8AKEoAARbhqCQ3rvTcZ232 LwzGk0OS/GSSRye5f1ZHNRbtqLXjKWs1nJ3kfyf56ySnW8cCQKsEkAbNdFv2zOtSUq3pV+dMR8PL N/KDg/Hk4CRPTvKEJMem/t6Sd1w7Tkzy5cF48hdJTpmOhl+pXBfMj3Z46eljMA8CCD1Su3/ZK51c /zEYT26Q5BFJhkl+PN1tA49I8ltJfnMwnvx9kt+bjobvq10UbJ92GOjuly+w3Dq1A9ZgPDkwya8k eXqSW9V6UbZgJckjkzxyMJ58PMnvJHm76VkALDPb8DZppcABe9WJADIYT44ajCevz+ouVC/OcoWP 3d07yduSfHwwnvxY7WKAvtK3YPuMgABzdfEXDts/q1OIajgzSQbjyZ2TPD/JE9Pet9o9k/z9YDz5 hyS/Nh0NP1O7IADYDCMgwLzdtdLzXpFkv8F48ldJPpXkSWkvfOzq4UnOHIwnL13bOhgAloIAAsxb rQXo+2V1C97Wg8eubpDkeUk+ORhPfqh2MUB9Zz/uBbVLgH0SQIB5q7X+4wbpT/DY3VFJ/nkwnrxg MJ5cv3YxALA31oC0yP4413GHv3lR7RL6pNYISN9dL8kLkzxkMJ48cToaXli7INide0g0wHvIHBgB Aeat1ggIqx6Q5GOD8eTY2oUAwJ4IIMDcXPLFww5PckDtOsghST4wGE8eX7sQANidAEJPlLg3iiNG P7pkvyRvGYwnv1a7ELhG7TaqDwd0nzUgwDxZ/9EtK0lePRhPbjYdDV9cu5hdHXPa0z+Q5IG161hC zzrmtKc/q3YRW/Tay87LCbWLAOozAtIkV1ioRgDppt8ejCcvr10E0AJ9C7ZPAGnQrMAB6zAFq7ue OxhPnle7CGC56VswDwJIiySQOq9Jz49LvnjojZLcofZbzV69dDCe/HLtIuixDrRVzR/L/B7SGwII MC93jnVly+DkwXjyY7WLABbjDm/77dolwD4JIMC83LV2AWzI9bK6O9ZdahcCzN9nf+r5tUuAfRJA gHkRQJbHzZO8bTCe3Lx2IQD0jwACzIsAslzukOSU2kUA0D8CCM27w9tenPo3hurDIYAsoScOxpOn 1C6CPqndTvXhgO6zYJTm2Vhj8S4959b7J7lN7Tq26JIkH09ydpIvJDkvyQVJvpXk60muSnL5Lj9/ gyS3THJwkttldfH9fZIck+QmtU9mC147GE/+cToafqV2IbRPewwkAggwH3euXcAmnZHkTUneMx0N z97C378kyWeSvH/nbwzGkxsmuX+SRyf56awGlGVw8yR/nORhtQsBoB8EkCYZgr0Wl9xKWJb7f/xj kt+cjoanzfuBp6Phd7IaSN4/GE+ek+QRSU5I8pDaJ70BPzoYT548HQ3fVLsQGqc9boA+BtsngLRI A095R9YuYB/OT3LCdDR8a4knm46GVyV5V5J3DcaTo5O8IsmP1H4R9uHVg/Hk76aj4eXbfyigWfoY zIFF6MA83LR2AXtxcpI7lgofu5uOhmdMR8MHJ/nJrAahrtqR5Lm1iwCgfQIIMA9fq13AHnw5yYOn o+GvduGq/nQ0fHtW18q8rXYte3HiYDw5tHYRALRNAAHm4TO1C9jNnyW5+3Q0fP+2H2mOpqPh16ej 4eOTPDvJ1bXr2YP9kvxW7SKArfnc4/9H7RJgQwSQBs0KHLCbf8rqdrW1XZbkSdPR8Be6MOqxnulo +HtJnpjkO7Vr2YNfHIwnh9cuAugmfQvmQQChaUf99Ytrl9ALB972vMuyuui6pn9KcrfpaPiW2q/H RkxHw7cleXy6F0JumOTXaxcBQLsEEJq2Ohxd+660fTnyykpv89VJXpTkIdPR8NxKNWzJdDT82yQ/ X7uOPXjKYDz5vtpF0KLa7VTrBywHAaRF5mB9z1FvfUmZ18ORA484/9Ss3tyvpAuSPHQ6Gr5wbevb pTMdDf8yyUtq17GbmyZ5au0iaFAH2qqmj2V/D+kNAaRJrrJQzfFJ/l+h5/qHJPfs2kLzLXpBVm+S 2CVPG4wn/rEDu9G3YPsEEGBuDjzi/EuTPCrJNxb4NFcmOTHJI6ajYRe3/9206Wh4dZKfS/LvtWvZ xe2TPKB2EQC0RwAB5urAI84/K8nDspjO9MeSHDMdDV89HQ2bGrCfjobnJxnVrmM3v1i7AADaI4DQ tNrTcft6DI44//QkxyU5e05v5RVZvUv3cdPR8JML/MjUNkny4dpF7OJxg/HkxrWLoB2126bWD1gW AgiwEIMjzv9ckvskOSlbv+ned5K8IclR09FwPB0Nv1v7vBZpbVSnS1vg7p/kwbWLAKAtAgiwMIMj zv/W4Ijzn5nkXkn+KslGA8TXk7wuyR2mo+HTpqPhBbXPpZTpaHhq6t9TZVc/WbsAANpyg9oFwEIZ k+6EwW3OPzPJz0y/csjxSR6d5EFJ7pzk8CQ3SvKfSc5N8tEk707yD9PR8Nu1667oFVldzN8FD69d AA3RJgMRQNqkgd+Fbf26ZHCbCy7+wpN+a5LVtQ6sYzoafmgwnpye5NjatSQ5bDCeHDUdDT9XuxBa oE1eevoYzIEpWADddErtAnbxkNoFANAOAaRBdtqAJrwlyX/ULmJNF0ZigA7Qt2AeBJAmuRM6LLvp aPiNrN7tvQuOq10A0BX6FmyfAALQXe+sXcCaOwzGk5vVLgKANliEDtBd76ldwC7ulOSMOT7eo7K8 30H/XvG5/zDJ82q/AFv0n7ULALphWRt/gOZNR8MLBuPJF5PcvnYtSe6SOQaQjxx38hW1T2irjjnt 6TWf/j8/ctzJl9V+DbbqyDe/pHYJQAcIILTNqjaW36npRgDpQg0sO20yEGtA2mQbLGjJJ2oXsOaw 2gUA6/v8k36zzBPpWzAHRkBomvaMBpxZu4A1h9cugOWnTQYSAYSGHfnml8a2fjTg7NoFrNlRuwBa oE0GTMEC6LoLklxZu4gkt6hdAABtEEAAOmw6Gs6SfLV2HUkGtQsAoA2mYDXJEDc05mupvwvVjWu/ CEAX6GOwfUZAaNLq+g9oxrR2AUkyGE/2q10DAMvPCAhtstUKbelEAEmyX5L/qF0ES0zbDEQAadJM Aw+tubp2AQCJPgbzYQoWQPd9vXYBHasDgCUmgAB0XyeuOa7tyAUA22IKFo2ySwdN6UJb/a3aBdAC bTNgBARgGdysdgFJvl27AADa0IWrajBXR/7Vy2qXQJJ//+qOGya539rxA1m7kd1gPLkyyXlJzkry geloeE7tWpdAF7a/vbh2AQC0QQChOXboqOuyc3cclOTEJMMkt9zXzw/Gk39N8vokfzodDa+sXX9H 3aJ2AVm9GSJsi/YZSEzBatRKgQOu67Jzd/xiki8k+Y1sIHysuWeSNyT59GA8eXDtc+ioQe0CklxU uwCgC/Qt2D4BpEWzAgfs4rJzd1z/snN3/HGSSZIDtvgwRyZ532A8edFgPPFNdG2H1S4gAgiQ6Fsw FwIIsC2XnbtjJcmfJ3nqHB5uJcnzk5wshKwajCc3TrKjdh1JrNUBYC4EEGC7XprkyXN+zKcleWXt E+uII2sXsObztQsA9uyLP/O82iXApgggwJZddu6OR2R1vccinDgYT/5L7XPsgDvXLmDNZ2sXAEAb BBBgSy47d8dNs7p4fJFePxhPDq99rpXdrXYBSb6b5Eu1iwCgDbbhpUGWDhTyzCx+cfTNk/xBkp+o fbIVHVu7gCSfmo6G361dBC3QPgNGQJrU+02wSrwAPT8uO/f7r5/VAFLCowbjyY8Ueq5OGYwn10vy g7XrSHJ67QJoRAfaryaPRt5C+kMAoSm3f9PLa5fQF/dPckjB53tB7ROu5N5ZHQWq7YzaBQDQDgGk RY1dbaGTfrjw8z1wMJ50YSSgtEfWLmDNabULADpC34I5EECa5E7oLNydKjxnH0dBHl27gCQXJ/lM 7SKArtC3YPsEEGArblrhOR8+GE/uVfvESxmMJ0cmuU/tOpK8dzoaXl27CADaYRcsmmIEt5haL/UL kjy29skX0pV7oLy3dgG0QxsNJEZAgK25vNLzPqYPa0EG48kNkjy1dh1r3lO7AGB95zx5UfeChcUR QICtuKDic79qMJ60Pln4MUkOrV1EklOno+HXahcBQFtMwaIts9b7pZ3x5YrPfb8kT07yxtovwgL9 eu0C1rypdgE0RhsNxAgIsDWfqvz8rxmMJwfWfhEWYTCe/Fi6cffz7yZ5a+0iAGiPANIi9wFh8T6R pObOSAcleU3tF2He1u583pW7ab5vOhpeXLsIoGP0LZgDAYRm3O6Nr6hdQm8ccMjFlyf5ZOUyfnYw nnRlp6h5eWqSe9QuYs0bahcA7N05/+W5tUuALRFAgK3qwvasf7h2v4ylNxhPDk7ystp1rPlKkr+r XQQAbRJAmuRO6BTxv2sXkORmSf5uMJ4cULuQOXhDkkHtIta8fjoaXlW7CKCL9C3YPgGkQX1cAmL6 VRWnpu52vDvdMclbB+PJjWoXslWD8eSEJI+uXceabyU5pXYRQDf1qW/B4gggwJYccMjFV6c7uyT9 aJI/GYwn169dyGYNxpMHJBnXrmMXvz8dDS+tXQQA7RJAaEOJYR/Hni5XdelK+ZOT/PkyhZDBeHLH JO9McsPataz5ZpJX1S6ChtVus1o7YEkJIMCWHXCri89K8uHadeziyVmdjnWT2oXsy9ri+fcluUXt WnZx0nQ0vKR2EQC0TQChESUW3jvWWTR4Uu13fzePS/LetV2lOmkwntw9yQeS3Lp2Lbu4LEY/WLja 7VVrBywnAaRFPRz2rT0K3ucjyVuyum1rl9w/yccH48n9aheyu8F48ogkH0q3wkeSvMDoB4tWu71q 7WjuTaQ3BBBgW/a/1SXfTfK7tevYg1sl+efBePI7g/HkxrWLGYwn1x+MJy9J8q4kN69dz24+leTk 2kUA0A83qF0AbNdt/6JLGwj11ilJfiPJIbUL2c31k/z3JI8ZjCfPmI6GH6hRxGA8uVtWX6Njar8g 63jmdDT8bu0ilsVHjjvZ3Beq+9LPjmqXAFtmBATYtv1vdcm3k7y4dh17cZck7x+MJ29fCwNFDMaT Ww7Gk9cm+Xi6Gz7+qFYwA6CfjIA0qWcX58wb7Yr/meTZSX6gdiF78dgkjx2MJ+9O8tok75uOhlfP +0kG48ntkzwjyS8luWntk96Lc5KcWLsIekR73YCe9TFYCAEEmIv9D77kym9ceNDxSf6+di0b8Mi1 4/zBePKmJO9Ocup0NLxyqw84GE8OS/LjSZ6U5IHp/rf01Ul+fjoaXlG7EAD6RQAB5mb/gy95zzcu POidSR5Tu5YNOiTJc9aObw7GkzOSfCLJWUm+unZ8I8m3dz3NJAev/d07JrlrkuOS3L72yWzSi6ej 4YdqFwFA/wggwLz9SpIfSnJQ7UI26aZJHrR2tO5dSV5UuwgA+kkAaVHv5th2faZLv+x/8KUXfOPC A5+a5B21a2GPPp/k56ajYe9aCrpAe730tBzMgV2wGtTszY9YGvsffOk7k7yudh1cx9eTPGY6Gl5W uxBg6770c79e7bn1LZgHAQRYlGcn+T+1i+B7rkzy6Olo+JnahQDQbwIIsBD7H3zpVUmemORztWsh 30nyhOlo+M+1CwEAa0BYarf981fWLoG92H/HpZd946IDH5Lkn5LcrnY9PXVVkl+YjoZ/W7sQMM8G SIyAAAu2/45Lz03y8CTn1a6lh76T5Ceno+GbahcCzMeX/mu99R8wL0ZAmtSfXUZcTFsON99x6Rcu v+jAByV5b5Lb1q6nJ76Z1fDx3tqFwE7a7Bb0p4/B4hgBAYq4+Y5Lv5Dkfkk+WbuWHjg3yQ8LHwB0 kQDSIvvw0lE333HphUkeGLtjLdKHkxw9HQ0/XrsQoEH6FsyBAMLSOsIC9KU0HQ2/nuQRSbyB8/c/ kzxoOhpeWLsQAFiPNSAsMfNQl9V0NLwqyWgwnnwsySlJbla7piX39SRPt9ic7tNuA0ZAgIqmo+Gb k9wjq9OG2JoPJbmH8AHAshBAWF4l1ro4Fj7HdzoanpPkh5O8MKv3rGBjvpnkxKxOufpK7WJgQ2q3 Py0c0ABTsIDqpqPhd5O8aDCevD2rU7KOrl1Tx70jyfHT0fCrtQsBgM0yAgJ0xnQ0PDPJcUmeleTy 2vV00GeS/MR0NHyc8AHAshJAGrTrKG2rI8BH/NmrapfAgkxHw6uno+HrkhyV1dGQLnzkavtqkqck udt0NHxX7WKAOr7888+pXYLZZcyFANKi2crqkbX9Rnb+ep5HZV1ohFms6Wh44XQ0/KUkd03y5iRX 166pgi8nOT7JkdPR8E/Xdg8DqGcRfYqO9C0oxxoQlpIRkP6Yjob/luSnB+PJ85I8M8kwyf6161qw DyZ5TZJ3TEfDPgYvABomgABLYToafinJswfjyfOT/Ne149jadc3RRUn+KsmfTUfDT9QuBgAWRQBp WMvzKVs+N/ZuOhpekeTkJCcPxpMjkvx0kicluWft2rZyOkneneSNSf6PKVa0TtsNJAJI21qeT9ny ubFh09Hwy0lenuTlg/FkR5KH7nIcWru+PbgqyceS/H2S9yQ5Q+igV7TdQAQQoBHT0fCirI4kvDFJ BuPJrZPcZ+24V1ZHSA7N2t4MBVyd5CtZDRwfSXJako9PR8Nv1n6tgOXzlV84sXYJMDcCCNCk6Wh4 XpLzkvztzt8bjCc3TnJEktsnuW2Sw5McmOSgtePAJIMkN177Kwfs4aG/vvbfK7I6herCJJdkdQ3H +Uk+l+TzSb4wHQ2vrP06AEDXCCBAUYf/Sc0dzP79P5N8du1YuJtVPVe6aLtXsW/zp79b+xQAtk0A adHOVX4re/i9BvgCBoBKGupPUI8bEfaFdX8AsJSs/6A1RkCatDNtzNb5fQCArdCXYPuMgAAAAMUY AWlZq/M0Wz0vgH3R/gENMALSK765AACoywhIg67ZBGtl3T9bbuafAn2l/aOuNvoR1GYEBAAAKEYA 6RnXzgAAqMkUrBatjY/OVvb+58tqycsH2DLtH9X5EDIHRkAAAIBiBBCWyuF/8uraJQBAMf/vKc+u XQLMnSlYLWtxmLTFcwLYKG0g0AABpEk7F3/MNvAzAAAbpf/A9pmCBQAAFCOAAAAAxZiC1bQWh0lb PCeAjdIGAstPAGnRzqUf+/qespgRANgMfQfmwBQsAACgGAEEAAAoxhSsBpmBBQAsgr4D8yCAtGwf rcTKvn+kUw6f/F7tEgDqWqZGG2AdpmABAADFGAFp0urkq9mGLpUtz5aOLvwBfacdpL7l6TfQXUZA WAqHmX4FANAEAaT3luN62leHv1a7BAAA5sAUrBZ9bxusDQ6TLkEGOWzymhj2BdAOUtkS9BnoPiMg AABAMQIIAABQjClYLWtpmLSlcwHYKm0h0AAjIAAAQDECCAAAUIwAAgAAFCOAAAAAxViE3qSd+8Rv ZrWiveUBgH3RX2D7BJAGzdZyx0bvQ7jr3wEAWI/+AvMggDStpasULZ0LwFZpC4HlJ4C0rKWrFC2d C8BWaQuBBgggDWvpe6qlcwHYKm0h0AK7YLEUzv2lZ9UuAQCAORBAAACAYgQQAACgGAEEAAAoRgAB AACKEUBaNMvmtkqZbeGowEJ0AKhsK32GDvctqMM2vE3aeaOqDfxrnrmpFQCwUfoNbJ8A0rIWrya0 eE4AG6UNBBoggDStxasULZ4TwEZpA4HlZw0IAABQjAACAAAUI4AAAADFCCAN2sxudsu2U965/+34 is8OAP1mF17mQQABAACKsQtWi9YuI2zoFh9LeMlhCUsGmAvtH9X5EDIHRkD6bEkbkfNMwwIAWFpG QFq2pAGj9+cGsB5tH9AAAaRJO+de7eubyg2tAIDN0Hdg+0zBAgAAijEC0rSWr1K0fG4A69H2AcvP CAgAAFCMAAIAABQjgAAAAMVYA9KinZtfrWzgZwAANkr/gTkQQFrWciPR8rkBrEfbBzTAFCyW0nlP e2btEgAA2AIBBAAAKEYAAQAAirEGpEGztdXnK3uZLDxzMysAYJP0H5gHAaRhra9VbP38AHan3QNa IIA0rfWrFK2fH8DutHvA8rMGBAAAKMYISIvciBAAWAT9B+bACAgAAFCMEZCWNXyV4pDXn1S7BIDy Gm7Xgf4wAsJSOv9XnlG7BAAAtkAAAQAAihFAAACAYgQQAACgGAEEAAAoxi5YTdp5A5DZPv4cAGAz 9CHYPgGkaa03Eq2fH8DutHvA8hNAWrSvO6HbRx4A2Ap9COZAAGlZ641E6+cHsDvtHtAAAaRBexsA 8d0FAGyVfgTzIIA0rPVGovXzA9iddg9ogW14AQCAYgQQAACgGAEEAAAoRgABAACKEUAAAIBi7ILV IvvwAgCLoB/BHAggTVpLHrPZ+n/WAo0g0DfaPaprqB9BNQJI01pvJFo/P4DdafeA5WcNCAAAUIwA wlK61R+cXLsEAAC2QABhKV3wq0+vXQIAAFsggAAAAMUIIAAAQDECCAAAUIwAAgAAFOM+IA3a043Q 3bsKANgu/QnmQQBp0exa/2nWrPUTBNiNdq9/Dj7p5Fz4jA7t/OgzyByYggUA0FGdCh8wJ0ZAmrRz 8tVsD78HALBV+hNsnwDStHYbiYNPen3T5wewZ9o9YPmZggUAABQjgAAAAMUIIAAAQDECCAAAUIwA AgAAFCOAAAAAxdiGt0V9uEtpH84RYHfaPmrzGWQOjIAAAADFCCAsnYN///W1SwAAYIsEEAAAoBgB BAAAKMYi9Cat1C7A+QEshPaP2nwG2T4jIAAAQDFGQBo2S5vXKewACPSV9g9ogQDSoNk6/w8AsB36 FcyDKVgAAEAxRkBaZg4WQFu0f0ADjIC0aJZrvqRmCzoAgIXb8bo/rF3CtS2qX6Fv0SsCCAAAUIwA wlLp3JUgAAA2RQABAACKEUAAAIBi7ILF0jD9CoBWXXT802qXAMUIIAAACyRcwLUJIE1bSVv72rV4 UxOAzdAOLoOLjv/l2iVApwkgTVpZ5/8BgO266Phfzo7XvaGnQUO/gu0TQAAA1mw0VPQzfMB8CCAs j5ZmkwFshXZwyy56lsAAXSGAtKjRL6hl/PLY8do3LG3ty2rHa9+w4dd7Iz+7mcfbTI3AfGhfC2u0 j0FZAggskC/G8jbzmm/kZxfxHm4mIAHXpW2F5SaAAHTU7p0sgYQ+ETKgXQIIwJJYr0MmmNACgQP6 QwABWHK7dty+Xxhp2rJPv/+akAFEAGnSsn9BAVu3tw6ecMIiCRf9oI/BPAggAD2xewdRIGG7hA5g KwQQgJ5ar/MomLArIQOYNwEEgGv5mjUlvSd0AIskgACwLmtK+kPoAEoRQADYkmuNlLzmj2qX0w+z lbk91NdO+G+1zwboKQGkSfP7ggLYiJ2dWUGkOwQMFkMfg+0TQFpkjzygkj11eoWS+REqqE4fgzkQ QABYqL6HEqEB4NoEEACKK9Up//7X/JEAANAx16tdAAAsivAB0D0CCAAAUIwAAgAAFCOAAAAAxQgg AABAMQIIAABQjAACAAAUI4AAAADFCCAAAEAx7oTeolntAgCAJuljMAdGQAAAgGKMgDRolpXaJQAA DdLHYB6MgAAAAMUIIAAAQDECCAAAUIwAAgAAFGMROltyy9/7YxvxAQCwaUZAAACAYgQQAACgGAEE AAAoRgABAACKEUAAAIBi7ILVIvtTAQDQUUZAAACAYgQQAACgGFOw6KCV2gVAJeZPAtA+AYSOET7o sz19/oUSANoigAB0mlACQFsEkCatXJ7k5rWrABbFSCHQnCtrF0A5FqG36YLaBQAAbIK+S48IIG06 s3YBAACb8NHaBVCOANKmd9QuAABgE95RuwDKsQakTW9N8vIkh9YuZKMsqYVusLoEqOC8rPZd6ImV 2UzXr0W3fPUpT0jyltp1bJSPIXTPijQClPHEi5/9VAGkRwSQhh306lPelORnatexIT6GsDwEE2B+ XnnJs586ql0EZVkD0rJZ3pbkpNplAI2Z7XIAbN0fJHle7SIozwhIDxz0u6f8VFbXhBxZuxYAoPe+ kOR5l5z41L+uXQh1CCA9cdDvnnKjJE9I8rgk90ly6yQ3rF0XANC872R1ofnHkrw9yVsvOfGpbjzY YwIIAABQjDUgAABAMQIIAABQjAACAAAUI4AAAADFCCAAAEAxAggAAFCMAAIAABQjgAAAAMUIIAAA QDECCAAAUIwAAgAAFCOAAAAAxQggAABAMQIIAABQjAACAAAUI4AAAADFCCAAAEAxAggAAFCMAAIA ABQjgAAAAMUIIAAAQDECCAAAUIwAAgAAFCOAAAAAxQggAABAMQIIAABQjAACAAAUI4AAAADFCCAA AEAxAggAAFCMAAIAABQjgAAAAMUIIAAAQDECCAAAUIwAAgAAFCOAAAAAxQggAABAMQIIAABQjAAC AAAUI4AAAADFCCAAAEAxAggAAFCMAAIAABQjgAAAAMUIIAAAQDECCAAAUIwAAgAAFCOAAAAAxQgg AABAMQIIAABQjAACAAAUI4AAAADFCCAAAEAxAggAAFCMAAIAABQjgAAAAMUIIAAAQDECCAAAUIwA AgAAFCOAAAAAxQggAABAMQIIAABQjAACAAAUI4AAAADFCCAAAEAxAggAAFCMAAIAABQjgAAAAMUI IAAAQDECCAAAUIwAAgAAFCOAAAAAxQggAABAMQIIAABQjAACAAAUI4AAAADFCCAAAEAxAggAAFCM AAIAABQjgAAAAMUIIAAAQDECCAAAUIwAAgAAFCOAAAAAxQggAABAMQIIAABQjAACAAAUI4AAAADF CCAAAEAxAggAAFCMAAIAABQjgAAAAMUIIAAAQDECCAAAUIwAAgAAFCOAAAAAxQggAABAMQIIAABQ jAACAAAUI4AAAADFCCAAAEAxAggAAFCMAAIAABQjgAAAAMUIIAAAQDECCAAAUIwAAgAAFCOAAAAA xQggAABAMQIIAABQjAACAAAUI4AAAADFCCAAAEAxAggAAFCMAAIAABQjgAAAAMUIIAAAQDECCAAA UIwAAgAAFCOAAAAAxQggAABAMQIIAABQjAACAAAUI4AAAADFCCAAAEAxAggAAFCMAAIAABTz/wG2 iy+SAiycaQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0xNlQxODo1MzoyNiswMzowMIgN8RwA AAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMTZUMTg6NTM6MjYrMDM6MDD5UEmgAAAAAElFTkSu QmCC"
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

registerBlockType( 'k2/counter-block', {
	title: 'Counter',
	icon: {
		src: counterBlockIcon
	},
	category: 'k2-blocks',
	attributes: {
		widgetSize: {
			type: 'number',
			default: 150
		},
		paddingTop: {
			type: 'number',
			default: 10
		},
		backgroundColor: {
			type: 'string',
			default: '#26C6DA'
		},
		haloColor: {
			type: 'string',
			default: '#C5E1A5'

		},
		titleFontColor: {
			type: 'string',
			default: 'black'
		},
		numberFontColor: {
			type: 'string',
			default: 'black'
		},
		titleFontFamily: {
			type: 'string',
			default: 'Comic Sans, Comic Sans MS, cursive'
		},
		numberFontFamily: {
			type: 'string',
			default: 'Comic Sans, Comic Sans MS, cursive'
		},
		numberFontSize: {
			type: 'number',
			default: 3
		},
		titleFontSize: {
			type: 'number',
			default: 1
		},
		counterShapeClass: {
			type: 'string',
			default: ''
		},
		number: {
			type: 'string',
			default: '0'
		},
		type: {
			type:'string',
			default: 'number'
		},
		title: {
			type: 'string',
			default: 'Title'
		},
		date: {
			type: 'object',
			default:{
				day: 1,
				month: 0,
				year: 2020
			}
		},
		prefix: {
			type: 'string',
			default: ''
		},
		postfix: {
			type: 'string',
			default: ''
		}

	},

	edit: function(props) {

			function onBackgroundColorChange(value){
				props.setAttributes( {
					backgroundColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'}
				);
			}

			function onChangeNumberColor(value){
				props.setAttributes( {
					numberFontColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'}
				);
			}


			function onChangetitleFontColor(value){
				props.setAttributes( {
					titleFontColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'}
				);
			}

			function onNumberChange(value){
				props.setAttributes({
					number: value
				})
			}

			function onTypeChange(value){
				props.setAttributes({
					type: value
				})
			}

			function onDateChange(newDateTime){
				var datetime = newDateTime.split('T');
				var date = datetime[0].split('-');
				console.log(date)
				var day=parseInt(date[2])
				var month= parseInt(date[1])-1
				var year=parseInt(date[0])
				props.setAttributes({
					date:{
						day:day,
						month:month,
						year:year
					}
				})
				var targetDate = new Date(year,month,day,0,0,0,0);
				var variable1 = new Date(); //todays date
				var days_;
				console.log(targetDate.toLocaleString())
				if(targetDate-variable1 >= 0) {
					//display zero
					days_ = 0;

				}
				else{
					var delta = Math.abs((targetDate-variable1)/1000);
					// calculate (and subtract) whole days
					days_ = Math.floor(delta / 86400);
				}

				props.setAttributes({
					number:days_
				})
			}

			function onTitleChange(value){
				props.setAttributes({
					title:value
				})
			}

			function myFunction(value) {
				var ParentDiv = value.target.parentNode
				var PopupDiv = ParentDiv.getElementsByTagName('span')
				if (PopupDiv[1].hidden  === true){
					PopupDiv[1].hidden  = false
				} else if (PopupDiv[1].hidden  === false){
					PopupDiv[1].hidden  = true
				}
			}



		var styling = {
				backgroundColor: (props.attributes.counterShapeClass == '')?'transparent':props.attributes.backgroundColor,
				width: props.attributes.widgetSize+"px",
				height: props.attributes.widgetSize+"px",
				boxShadow: (props.attributes.counterShapeClass != 'k2-cw-halo')?'none':"0 0 25px "+props.attributes.haloColor
			}

			var titleStyling = {
				color: props.attributes.titleFontColor,
				fontFamily: props.attributes.titleFontFamily,
				fontSize: props.attributes.titleFontSize + 'em',
			}

			var numberStyling = {
				color: props.attributes.numberFontColor,
				fontFamily: props.attributes.numberFontFamily,
				fontSize: props.attributes.numberFontSize + 'em',
			}

			var contentStyling = {
				paddingTop: props.attributes.paddingTop+'px'
			}

			var fontDefaultColors = [
				{ color: '#32897A' },
				{  color: '#1995AD' },
				{  color: '#011A27' },
				{  color: '#F69454' },
			];
			var contentControls = (
				<TextControl
							label={<strong>Number</strong>}
							onChange={onNumberChange}
							value = {props.attributes.number}
				/>
			);
			if (props.attributes.type === 'days'){
				contentControls = (

				<div>
						<label>Date</label>
						<DateTimePicker
							currentDate = {new Date(props.attributes.date.year,props.attributes.date.month,props.attributes.date.day,0,0,0,0)}
							onChange={onDateChange}
						/>
					</div>
				);
			}

			var colorControls = (

				<PanelRow>
					<p><strong>Background color</strong></p>
					<div className="k2-counter-inspector-popup">
							<span style={{backgroundColor: props.attributes.backgroundColor}} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
							</span>
						<span className="k2-counter-inspector-popuptext" id="myPopup" hidden={ true }>

							<div>
								<ColorPicker
									color={ props.attributes.backgroundColor }
									onChangeComplete={ onBackgroundColorChange }
								/>
								<TextControl
									onChange={ ( value ) => {
										props.setAttributes( { backgroundColor: value } )
									} }
									value={ props.attributes.backgroundColor}
								/>
							</div>

							</span>
					</div>
				</PanelRow>



			);
			if(props.attributes.counterShapeClass===''){
				colorControls = null;
			}
			if(props.attributes.counterShapeClass==='k2-cw-halo'){
				colorControls = (

				<div>

						<PanelRow>
							<p><strong>Background color</strong></p>
							<div className="k2-counter-inspector-popup">
								<span style={{backgroundColor: props.attributes.backgroundColor}} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
								</span>
								<span className="k2-counter-inspector-popuptext" id="myPopup" hidden={ true }>

								<div>
									<ColorPicker
										color={ props.attributes.backgroundColor }
										onChangeComplete={onBackgroundColorChange}
									/>
									<TextControl
										onChange={ ( value ) => {
											props.setAttributes( { backgroundColor: value } )
										} }
										value={ props.attributes.backgroundColor}
									/>
								</div>

								</span>
							</div>
						</PanelRow>



						<PanelRow>
							<p><strong>Halo color</strong></p>
							<div className="k2-counter-inspector-popup">
									<span style={{backgroundColor: props.attributes.haloColor}} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
									</span>
								<span className="k2-counter-inspector-popuptext" id="myPopup" hidden={ true }>

									<div>
										<ColorPicker
											color={ props.attributes.haloColor }
											onChangeComplete={ ( value ) => {props.setAttributes( {haloColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'} ); console.log(props.attributes.haloColor)} }
										/>
										<TextControl
											onChange={ ( value ) => {
												props.setAttributes( { haloColor: value } )
											} }
											value={ props.attributes.haloColor}
										/>
									</div>

									</span>
							</div>
						</PanelRow>

				</div>


				)
			}


			return ([
				<InspectorControls>
					<div>
						<p>Counts up to a certain Number or Days since a date</p>
					</div>
					<PanelBody title={"Content"}>
						<RangeControl
							label= "Widget Size"
							value={ props.attributes.widgetSize }
							onChange={ (value)=>{props.setAttributes({widgetSize:value})} }
							min={ 150 }
							max={ 1000 }
							step ={1}
						/>
						<RangeControl
							label= "Content Alignment"
							value={ props.attributes.paddingTop }
							onChange={ (value)=>{props.setAttributes({paddingTop:value})} }
							min={ 0 }
							max={ Math.floor(props.attributes.widgetSize/4) }
							step ={1}
						/>
						<SelectControl
							label="Type"
							value={props.attributes.type}
							options={[
								{ label: 'Number', value: 'number' },
								{ label: 'Days since Date', value: 'days' },
							]}
							onChange={onTypeChange}
						/>
						<div>
						{contentControls}
						<TextControl
							label={<strong>Title</strong>}
							onChange={onTitleChange}
							value = {props.attributes.title}
						/>
						<TextControl
								label={<strong>Prefix</strong>}
								onChange={(value)=>{props.setAttributes({prefix:value})}}
								value = {props.attributes.prefix}
						/>
						<TextControl
									label={<strong>PostFix</strong>}
									onChange={(value)=>{props.setAttributes({postfix:value})}}
									value = {props.attributes.postfix}
						/>
				</div>
					</PanelBody>
					<PanelBody title={"Styling and color"}>

						<SelectControl
									label="Background Shape"
									value={props.attributes.counterShapeClass}
									options={[
										{label: 'None', value: ''},
										{ label: 'Square', value: 'k2-cw-square' },
										{ label: 'Round', value: 'k2-cw-round' },
										{label: 'Halo', value: 'k2-cw-halo'}
									]}
									onChange={(value)=>{props.setAttributes({counterShapeClass:value})}}
						/>

						{colorControls}

						<PanelRow>
							<p><strong>Number color</strong></p>
							<div className="k2-counter-inspector-popup">
								<span style={{backgroundColor:props.attributes.numberFontColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
									</span>
										<span className="k2-counter-inspector-popuptext" id="myPopup" hidden={ true }>

									<div>
										<ColorPicker
											color={ props.attributes.numberFontColor }
											onChangeComplete={ onChangeNumberColor }
										/>
										<TextControl
											onChange={ ( value ) => {
												props.setAttributes( { numberFontColor: value } )
											} }
											value={ props.attributes.numberFontColor }
										/>
									</div>

								</span>
							</div>
						</PanelRow>


						<SelectControl
									label="Number Font"
									value={props.attributes.numberFontFamily}
									options={GLOBAL_FONTS}
									onChange={(value)=>{props.setAttributes({numberFontFamily:value})}}
						/>

						<RangeControl
							label= "Number Font Size"
							value={ props.attributes.numberFontSize }
							onChange={ (value)=>{props.setAttributes({numberFontSize:value})} }
							min={ 1 }
							max={ 8 }
							step ={0.1}
						/>

						<PanelRow>
							<p><strong>Title color</strong></p>
							<div className="k2-counter-inspector-popup">
								<span style={{backgroundColor:props.attributes.titleFontColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
									</span>
										<span className="k2-counter-inspector-popuptext" id="myPopup" hidden={ true }>

									<div>
										<ColorPicker
											color={ props.attributes.titleFontColor }
											onChangeComplete={ onChangetitleFontColor }
										/>
										<TextControl
											onChange={ ( value ) => {
												props.setAttributes( { titleFontColor: value } )
											} }
											value={ props.attributes.titleFontColor }
										/>
									</div>

								</span>
							</div>
						</PanelRow>

						<SelectControl
									label="Title Font"
									value={props.attributes.titleFontFamily}
									options={GLOBAL_FONTS}
									onChange={(value)=>{props.setAttributes({titleFontFamily:value})}}
						/>
						<RangeControl
							label= "Title Font Size"
							value={ props.attributes.titleFontSize }
							onChange={ (value)=>{props.setAttributes({titleFontSize:value})} }
							min={ 1 }
							max={ 8 }
							step ={0.1}
						/>


					</PanelBody>
				</InspectorControls>
				,
				<div className="k2-cw-parent">
					<div className={"k2-cw-container"+" "+props.attributes.counterShapeClass} style={styling}>
						<div className="k2-cw-content" style={contentStyling}>
							<div className="k2-cw-number" style={numberStyling}>
								<span className="k2-cw-prefix">{props.attributes.prefix}</span>
								<span className="k2-cw-span-number">{props.attributes.number}</span>
								<span className="k2-cw-postfix">{props.attributes.postfix}</span>
							</div>
							<p className="k2-cw-title" style={titleStyling}> {props.attributes.title} </p>

						</div>
					</div>
				</div>
			])
		}
	,
	save: function(props) {
		var styling = {
			backgroundColor: (props.attributes.counterShapeClass == '')?'transparent':props.attributes.backgroundColor,
			width: props.attributes.widgetSize+"px",
			height: props.attributes.widgetSize+"px",
			boxShadow: (props.attributes.counterShapeClass != 'k2-cw-halo')?'none':"0 0 25px "+props.attributes.haloColor
		}

		var titleStyling = {
			color: props.attributes.titleFontColor,
			fontFamily: props.attributes.titleFontFamily,
			fontSize: props.attributes.titleFontSize + 'em',
		}

		var numberStyling = {
			color: props.attributes.numberFontColor,
			fontFamily: props.attributes.numberFontFamily,
			fontSize: props.attributes.numberFontSize + 'em',
		}

		var contentStyling = {
			paddingTop: props.attributes.paddingTop+'px'
		}
		return (
			<div className="k2-cw-parent">
				<div className={"k2-cw-container"+" "+props.attributes.counterShapeClass} style={styling} data-done={0}>
					<div className="k2-cw-content" style={contentStyling}>
						<div className="k2-cw-number" style={numberStyling}>
							<span className="k2-cw-prefix">{props.attributes.prefix}</span>
							<span className="k2-cw-span-number">{props.attributes.number}</span>
							<span className="k2-cw-postfix">{props.attributes.postfix}</span>
						</div>
						<p className="k2-cw-title" style={titleStyling}> {props.attributes.title} </p>
					</div>
				</div>
			</div>
		);
		},
})
