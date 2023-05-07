"use strict";
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.tsx
var src_exports = {};
__export(src_exports, {
    Box: function() {
        return Box;
    },
    Button: function() {
        return Button;
    },
    Checkbox: function() {
        return Checkbox2;
    },
    Heading: function() {
        return Heading;
    },
    MultiStep: function() {
        return MultiStep;
    },
    Text: function() {
        return Text;
    },
    TextArea: function() {
        return TextArea;
    },
    TextInput: function() {
        return TextInput;
    }
});
module.exports = __toCommonJS(src_exports);
// src/styles/index.ts
var import_tokens = require("@ignite-ui/tokens");
var import_react = require("@stitches/react");
var _ref = (0, import_react.createStitches)({
    themeMap: _object_spread_props(_object_spread({}, import_react.defaultThemeMap), {
        height: "space",
        width: "space"
    }),
    theme: {
        colors: import_tokens.colors,
        fontSizes: import_tokens.fontSizes,
        fontWeights: import_tokens.fontWeights,
        fonts: import_tokens.fonts,
        lineHeights: import_tokens.lineHeights,
        radii: import_tokens.radii,
        space: import_tokens.space
    }
}), styled = _ref.styled, css = _ref.css, globalCss = _ref.globalCss, keyframes = _ref.keyframes, getCssText = _ref.getCssText, theme = _ref.theme, createTheme = _ref.createTheme, config = _ref.config;
// src/components/Button.tsx
var Button = styled("button", {
    all: "unset",
    borderRadius: "$sm",
    fontSize: "$sm",
    fontWeight: "$medium",
    fontFamily: "$default",
    textAlign: "center",
    minWidth: 120,
    boxSizing: "border-box",
    padding: "0 $4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "$2",
    cursor: "pointer",
    svg: {
        width: "$4",
        height: "$4"
    },
    "&:disabled": {
        cursor: "not-allowed"
    },
    "&:focus": {
        boxShadow: "0 0 0 2px $colors$gray100"
    },
    variants: {
        variant: {
            primary: {
                color: "$white",
                background: "$ignite500",
                "&:not(:disabled):hover": {
                    background: "$ignite300"
                },
                "&:disabled": {
                    backgroundColor: "$gray200"
                }
            },
            secondary: {
                color: "$ignite300",
                border: "2px solid $ignite500",
                "&:not(:disabled):hover": {
                    background: "$ignite500",
                    color: "$white"
                },
                "&:disabled": {
                    color: "$gray200",
                    borderColor: "$gray200"
                }
            },
            tertiary: {
                color: "$gray100",
                "&:not(:disabled):hover": {
                    color: "$white"
                },
                "&:disabled": {
                    color: "$gray600"
                }
            }
        },
        size: {
            sm: {
                height: 38
            },
            md: {
                height: 46
            }
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
});
Button.displayName = "Button";
// src/components/Box.tsx
var Box = styled("div", {
    padding: "$4",
    borderRadius: "$md",
    backgroundColor: "$gray800",
    border: "1px solid $gray600"
});
Box.displayName = "Box";
// src/components/Text.tsx
var Text = styled("p", {
    fontFamily: "$default",
    lineHeight: "$base",
    margin: 0,
    color: "$gray100",
    variants: {
        size: {
            xxs: {
                fontSize: "$xxs"
            },
            xs: {
                fontSize: "$xs"
            },
            sm: {
                fontSize: "$sm"
            },
            md: {
                fontSize: "$md"
            },
            lg: {
                fontSize: "$lg"
            },
            xl: {
                fontSize: "$xl"
            },
            "2xl": {
                fontSize: "$2xl"
            },
            "4xl": {
                fontSize: "$4xl"
            },
            "5xl": {
                fontSize: "$5xl"
            },
            "6xl": {
                fontSize: "$6xl"
            },
            "7xl": {
                fontSize: "$7xl"
            },
            "8xl": {
                fontSize: "$8xl"
            },
            "9xl": {
                fontSize: "$9xl"
            }
        }
    },
    defaultVariants: {
        size: "md"
    }
});
// src/components/Heading.tsx
var Heading = styled("h2", {
    fontFamily: "$default",
    lineHeight: "$shorter",
    margin: 0,
    color: "$gray100",
    variants: {
        size: {
            sm: {
                fontSize: "$xl"
            },
            md: {
                fontSize: "$2xl"
            },
            lg: {
                fontSize: "$4xl"
            },
            "2xl": {
                fontSize: "$5xl"
            },
            "3xl": {
                fontSize: "$6xl"
            },
            "4xl": {
                fontSize: "$7xl"
            },
            "5xl": {
                fontSize: "$8xl"
            },
            "6xl": {
                fontSize: "$9xl"
            }
        }
    },
    defaultVariants: {
        size: "md"
    }
});
// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
    backgroundColor: "$gray900",
    padding: "$3 $4",
    borderRadius: "$sm",
    boxSizing: "border-box",
    border: "2px solid $gray900",
    display: "flex",
    alignItems: "baseline",
    "&:has(input:focus)": {
        borderColor: "$ignite300"
    },
    "&:has(input:disabled)": {
        opacity: 0.5,
        cursor: "not-allowed"
    }
});
var Prefix = styled("span", {
    fontFamily: "$default",
    fontSize: "$sm",
    color: "$gray400",
    fontWeight: "regular"
});
var Input = styled("input", {
    fontFamily: "$default",
    fontSize: "$sm",
    color: "$white",
    fontWeight: "regular",
    background: "transparent",
    border: 0,
    width: "100%",
    "&:focus": {
        outline: "none "
    },
    "&:disabled": {
        cursor: "not-allowed"
    },
    "&:placeholder": {
        color: "$gray400"
    }
});
// src/components/TextInput/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function TextInput(_param) {
    var prefix = _param.prefix, props = _object_without_properties(_param, [
        "prefix"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TextInputContainer, {
        children: [
            !!prefix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prefix, {
                children: prefix
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, _object_spread({}, props))
        ]
    });
}
// src/components/TextArea.tsx
var TextArea = styled("textarea", {
    backgroundColor: "$gray900",
    padding: "$3 $4",
    borderRadius: "$sm",
    boxSizing: "border-box",
    border: "2px solid $gray900",
    fontFamily: "$default",
    fontSize: "$sm",
    color: "$white",
    fontWeight: "$regular",
    resize: "vertical",
    minHeight: 80,
    "&:focus": {
        outline: 0,
        borderColor: "$ignite300"
    },
    "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed"
    },
    "&:placeholder": {
        color: "$gray400"
    }
});
// src/components/Checkbox/index.tsx
var import_react2 = require("@phosphor-icons/react");
// src/components/Checkbox/styles.ts
var Checkbox = __toESM(require("@radix-ui/react-checkbox"));
var CheckboxContainer = styled(Checkbox.Root, {
    all: "unset",
    width: "$6",
    height: "$6",
    backgroundColor: "$gray900",
    borderRadius: "$xs",
    lineHeight: 0,
    cursor: "pointer",
    overflow: "hidden",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid $gray900",
    '&[data-state="checked"]': {
        backgroundColor: "$ignite300"
    },
    '&:focus, &[data-state="checked"]': {
        border: "2px solid $ignite300"
    }
});
var slideIn = keyframes({
    from: {
        transform: "translateY(-100%)"
    },
    to: {
        transform: "translateY(0)"
    }
});
var slideOut = keyframes({
    from: {
        transform: "translateY(0)"
    },
    to: {
        transform: "translateY(-100%)"
    }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
    color: "$white",
    width: "$4",
    height: "$4",
    '&[data-state="checked"]': {
        animation: "".concat(slideIn, " 200ms ease-out")
    },
    '&[data-state="unchecked"]': {
        animation: "".concat(slideOut, " 200ms ease-out")
    }
});
// src/components/Checkbox/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Checkbox2(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CheckboxContainer, _object_spread_props(_object_spread({}, props), {
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CheckboxIndicator, {
            asChild: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Check, {
                weight: "bold"
            })
        })
    }));
}
Checkbox2.displayName = "Checkbox";
// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
    color: "$gray200",
    fontSize: "$xs",
    defaultVariants: {
        size: "xs"
    }
});
var Steps = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
    gap: "$2",
    marginTop: "$1"
});
var Step = styled("div", {
    height: "$1",
    borderRadius: "$px",
    backgroundColor: "$gray600",
    variants: {
        active: {
            true: {
                backgroundColor: "$gray100"
            }
        }
    }
});
// src/components/MultiStep/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function MultiStep(param) {
    var size = param.size, _param_currentStep = param.currentStep, currentStep = _param_currentStep === void 0 ? 1 : _param_currentStep;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(MultiStepContainer, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Label, {
                children: [
                    "Passo ",
                    currentStep,
                    " de ",
                    size
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Steps, {
                css: {
                    "--steps-size": size
                },
                children: Array.from({
                    length: size
                }, function(_, i) {
                    return i + 1;
                }).map(function(step) {
                    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Step, {
                        active: currentStep >= step
                    }, step);
                })
            })
        ]
    });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Box: Box,
    Button: Button,
    Checkbox: Checkbox,
    Heading: Heading,
    MultiStep: MultiStep,
    Text: Text,
    TextArea: TextArea,
    TextInput: TextInput
});
