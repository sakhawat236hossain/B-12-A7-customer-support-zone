# question-1 = What is JSX, and why is it used?

# answer -(1)

# What is JSX?=

JSX হলো JavaScript-এর ভেতরে HTML-এর মতো কোড লেখার একটি syntax extension।

# Why is JSX Used?=

JSX আমরা ব্যাবহার করবো কারন UI কোড HTML- এর মত লাগে । আর বুজতেও সহজ হই .
JSX ছাড়া React কোড অনেক লম্বা হয়ে যায়।
JSX-এর ভেতরেই আমরা JavaScript expression, variable, loop, condition লিখতে পারি। Dynamic UI বানানো সহজ হয় । Developer experience অনেক ভালো হয়




# question-2 = What is the difference between State and Props?

# answer -(2)


# Props
 হলো বাইরে থেকে  আসা তথ্য, যা কম্পোনেন্টকে বলে দেয় সে কেমন দেখতে হবে বা কীভাবে কাজ করবে। এটি অনেকটা ফাংশনের আর্গুমেন্টের মতো।
  Props ব্যবহার করে প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডেটা পাঠানো হয়।

# State
 হলো কম্পোনেন্টের নিজের ভিতরের তথ্য, যা সময়ের সাথে পরিবর্তিত হতে পারে এবং সেই পরিবর্তনের ফলে কম্পোনেন্টটি  re-render হয়। 
 State ব্যবহার হয় যখন component-এর ভেতরে ডাটা update করতে হয়।







# question-3 = What is the useState hook, and how does it work?

# answer -(3)


# What is the useState hook,

useState হলো React-এর একটা Hook, যা দিয়ে আমরা functional component-এর ভেতরে state (ডাটা) তৈরি এবং ম্যানেজ করি।

# how does it work?

এটা  useState(initialValue) লিখলে , তখন React  একটা array রিটার্ন করে।
সেই array-এর মধ্যে দুইটা জিনিস থাকে:

State value → এটা হলো সেই ডাটার বর্তমান মান, যেটা স্ক্রিনে দেখাবে।

Update function → এটা দিয়ে তুমি state-এর মান পরিবর্তন করবে।

যেমন  (const [value, setValue] = useState(initialValue);)
 



 # question-4 = How can you share state between components in React?

# answer -(4)

React এ state share করার জন্য সাধারণত Lifting State Up ব্যবহার করা হয়।
মানে হচ্ছে, state parent component এ রাখা হয় এবং props এর মাধ্যমে child component এ পাঠানো হয়।
এইভাবে parent → child এ state পাঠিয়ে multiple component এ share করা যায়।



 # question-5 = How is event handling done in React?


# answer -(5)

React এ event handling করা হয় camelCase নাম দিয়ে (যেমন: onClick)। 
 Event handler হিসেবে function ব্যবহার করা হয়।
 JSX এ event handler দেওয়া হয় curly braces {} এর ভিতরে।