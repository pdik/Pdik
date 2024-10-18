<?php

use Inertia\Testing\AssertableInertia as Assert;

it('home returns a successful response', function () {
    $this->get('/')
        ->assertInertia(fn (Assert $page) =>
            $page->component('Welcome')
        )->assertStatus(200);
});
