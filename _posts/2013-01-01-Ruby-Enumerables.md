---
layout: post
comments: true
title: "Enumerable Methods"
---
<p>The enumerable mixin provides a number of very useful methods such as collect and find. A mixin is a module which can be 'mixed in' to a class to add extra functionality (it's one of the ways Ruby can overcome the limitations of single inheritance). As a side note - any class that 'mixes in' the Enumerable module has to define the #each method. The methods of Enumerable can be seen in the <a href="http://ruby-doc.org/core-2.0.0/Enumerable.html">ruby-docs (ruby 2.0.0).</a> However the method I'm going to concentrate on in this post is group_by. Details below...</p>

<h5>group_by</h5>

<p>The definition of group_by taken from ruby-doc is:</p>

<p>Groups the collection by result of the block. Returns a hash where the keys are the evaluated result from the block and the values are arrays of elements in the collection that correspond to the key.If no block is given an enumerator is returned.</p>

<p>Simply translated - the method iterates over a collection passing each element to a block and returns a hash. The hash key is taken from the returned value from the block and the elements are grouped by this key</p>

<p>An example of how it can be used is given below. Here the block returns the length of each name which becomes the hash key and each element of the array is grouped by this value</p>
{% highlight ruby %} names = ["osman", "joe", "kelly"] names.group_by { |name| name.length } #=> {5=>["osman", "kelly"], 3=>["joe"]} {% endhighlight %}

<p>We can also use it for grouping objects by the type of class they belong to:</p>

{% highlight ruby %} ["Osman", 1.5, "Joe", 2].group_by(&:class) => {String=>["Osman", "Joe"], Float=>[1.5], Fixnum=>[2]} {% endhighlight %}

<p>group_by can also be used on hashes as well as arrays.</p>

{% highlight ruby %} hobbies = {"Joe" => "football", "Osman" => "football", "Mike" => "foosball", "Kelly" => "tennis", "David" => "foosball" } hobbies.group_by{|name,sport| sport} => { "football"=>[["Joe", "football"],["Osman", "football"]], "foosball"=>[["Mike", "foosball"],["David", "foosball"]], "tennis"=>[["Kelly", "tennis"]] } {% endhighlight %}

<p>As you can tell this is quite a powerful method that can be utilized in lots of different ways.</p>
