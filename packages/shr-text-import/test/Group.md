# shr.test

### <a name="Coded"></a>Coded [Entry]
It is a coded element

|  |  |  |
| --- | --- | --- |
| `Value` | code from http://standardhealthrecord.org/test/vs/Coded |  |

### <a name="ElementValue"></a>ElementValue [Entry]
It is an element with an element value

|  |  |  |
| --- | --- | --- |
| `Value` | [`Simple`](#Simple) |  |

### <a name="ForeignElementValue"></a>ForeignElementValue [Entry]
It is an element with a foreign element value

|  |  |  |
| --- | --- | --- |
| `Value` | [`Simple`](../other/test/index.md#Simple) |  |

### <a name="Group"></a>Group [Entry]
It is a group of elements [bar](http://foo.org/bar), [far](http://boo.org/far)

|  |  |  |
| --- | --- | --- |
| [`Simple`](#Simple) | 1 | It is a simple element |
| [`Coded`](#Coded) | optional | It is a coded element |
| Choice | 0&nbsp;to&nbsp;2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|&nbsp;[`Simple`](../other/test/index.md#Simple) | 1 | It is a simple element |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|&nbsp;[`ForeignElementValue`](#ForeignElementValue) | 1&nbsp;or&nbsp;more | It is an element with a foreign element value |
| [`ElementValue`](#ElementValue) | 0&nbsp;or&nbsp;more | It is an element with an element value |

### <a name="Simple"></a>Simple [Entry]
It is a simple element [bar](http://foo.org/bar)

|  |  |  |
| --- | --- | --- |
| `Value` | string |  |

# shr.other.test

### <a name="Simple"></a>Simple [Entry]
It is a simple element [bar](http://foo.org/bar)

|  |  |  |
| --- | --- | --- |
| `Value` | string |  |