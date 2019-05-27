<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class EventController extends AbstractController
{
    /**
     * @Route("/add_event", name="add_event",  methods={"POST"})
     */
    public function index(Request $oRequest)
    {
        return new JsonResponse([
            'event' => $oRequest->getContent()
        ]);
    }
}
